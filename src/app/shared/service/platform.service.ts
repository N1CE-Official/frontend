import { Injectable } from '@angular/core';
import { BlogPost, BlogCategory, Expert, ServiceCategory, Service } from '../models';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class PlatformService {
  private servicesUrl = 'api/services';
  private categoriesUrl = 'api/serviceCategories';
  private expertsUrl = 'api/experts';

  constructor(
    private http: HttpClient,
    private messageService: MessageService) {
  }

  public listCategories(): Observable<ServiceCategory[]> {
    return this.http.get<BlogCategory[]>(this.categoriesUrl)
  }

  public getService(id: string): Observable<Service> {
    const url = `${this.servicesUrl}/${id}`;
    return this.http.get<Service>(url).pipe(
      catchError(this.handleError<Service>(`getService id=${id}`))
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

  public listServices(): Observable<Service[]> {
    return this.http.get<Service[]>(this.servicesUrl);
  }
}
