import { Injectable } from '@angular/core';
import { Article, Category } from './models';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError} from 'rxjs/operators';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private articlesUrl = 'api/posts';
  private categoriesUrl = 'api/categories';
  private inEvidenceUrl = 'api/inEvidence';

  constructor(
    private http: HttpClient,
    private messageService: MessageService) {
  }

  public listCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.categoriesUrl)
  }

  public inEvidenceCategory(): Observable<Category> {
    return this.http.get<Category>(this.inEvidenceUrl);
  }

  public getArticle(id: string): Observable<Article> {
    const url = `${this.articlesUrl}/${id}`;
    return this.http.get<Article>(url).pipe(
      // tap(_ => this.log(`fetched article id=${id}`)),
      catchError(this.handleError<Article>(`getArticle id=${id}`))
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
}
