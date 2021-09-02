import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoingeckoService {
  constructor(
    private http: HttpClient
  ) {
  }

  public getPrice(): Observable<any> {
    const url = 'https://api.coingecko.com/api/v3/simple/price?ids=n1ce&vs_currencies=usd';
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get<any>(url, {headers: headers});
  }
}
