import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from '../../shared/classes/models';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private ordersUrl = 'api/orders';

  constructor(
    private http: HttpClient,
  ) {
  }

  public getOrders(userId: string): Observable<Order[]> {
    return this.http.get<Order[]>(this.ordersUrl).pipe(
      map(list => list.filter(order => order.userId === userId))
    );
  }
}
