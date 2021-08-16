import { Injectable } from '@angular/core';
import { ExpertPlatformService, ServiceCategory } from '../../../shared/classes/models';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { MessageService } from '../../../shared/services/message.service';

@Injectable({
  providedIn: 'root'
})
export class PlatformService {
  private servicesUrl = 'api/services';
  private categoriesUrl = 'api/serviceCategories';
  private topServicesUrl = 'api/topServices';

  constructor(
    private http: HttpClient,
    private messageService: MessageService) {
  }

  public listCategories(): Observable<ServiceCategory[]> {
    return this.http.get<ServiceCategory[]>(this.categoriesUrl)
  }

  public listTopServices(): Observable<string[]> {
    return this.http.get<string[]>(this.topServicesUrl)
  }

  public listServices(): Observable<ExpertPlatformService[]> {
    return this.http.get<ExpertPlatformService[]>(this.servicesUrl);
  }

  public getService(id: string): Observable<ExpertPlatformService> {
    const url = `${this.servicesUrl}/${id}`;
    return this.http.get<ExpertPlatformService>(url).pipe(
      catchError(this.handleError<ExpertPlatformService>(`getService id=${id}`))
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
    this.messageService.add(`PlatformService: ${message}`);
  }

}
