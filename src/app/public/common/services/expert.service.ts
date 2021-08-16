import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MessageService } from '../../../shared/services/message.service';
import { Observable, of } from 'rxjs';
import { Expert } from '../../../shared/classes/models';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ExpertService {
  private expertsUrl = 'api/experts';
  private latestExpertCandidatesUrl = 'api/latestExpertCandidates';

  constructor(
    private http: HttpClient,
    private messageService: MessageService) {
  }

  public getExpert(id: string): Observable<Expert> {
    const url = `${this.expertsUrl}/${id}`;
    return this.http.get<Expert>(url).pipe(
      catchError(this.handleError<Expert>(`getExpert id=${id}`))
    );
  }

  public latestExpertCandidates(): Observable<string[]> {
    return this.http.get<string[]>(this.latestExpertCandidatesUrl);
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
