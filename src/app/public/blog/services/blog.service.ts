import { Injectable } from '@angular/core';
import { BlogPost, BlogCategory, Expert } from '../../../shared/classes/models';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { MessageService } from '../../../shared/services/message.service';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private postsUrl = 'api/posts';
  private categoriesUrl = 'api/blogCategories';
  private inEvidenceUrl = 'api/inEvidence';
  private expertsUrl = 'api/experts';

  constructor(
    private http: HttpClient,
    private messageService: MessageService) {
  }

  public listCategories(): Observable<BlogCategory[]> {
    return this.http.get<BlogCategory[]>(this.categoriesUrl)
  }

  public inEvidenceCategory(): Observable<BlogCategory> {
    return this.http.get<BlogCategory>(this.inEvidenceUrl);
  }

  public getPost(id: string): Observable<BlogPost> {
    const url = `${this.postsUrl}/${id}`;
    return this.http.get<BlogPost>(url).pipe(
      catchError(this.handleError<BlogPost>(`getPost id=${id}`))
    );
  }

  public getExpert(id: string): Observable<Expert> {
    const url = `${this.expertsUrl}/${id}`;
    return this.http.get<Expert>(url).pipe(
      catchError(this.handleError<Expert>(`getExpert id=${id}`))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`BlogService: ${message}`);
  }

  public listBlogPosts(): Observable<BlogPost[]> {
    return this.http.get<BlogPost[]>(this.postsUrl);
  }
}
