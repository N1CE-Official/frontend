import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MessageService } from '../../../shared/services/message.service';
import { Observable, of } from 'rxjs';
import { SearchResult} from '../../../shared/classes/models';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private searchUrl = 'api/search';

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  public search(str: string): Observable<SearchResult[]> {
    return this.http.get<SearchResult[]>(this.searchUrl);
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
