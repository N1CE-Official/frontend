import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Order } from '../../shared/classes/models';
import { OrderService } from '../services/order.service';

@Injectable({
  providedIn: 'root'
})
export class UserOrdersResolverService implements Resolve<Order[]> {

  constructor(public orderService: OrderService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Order[]> {
    const userId = route.data['userId'];
    if (userId != null) {
      return this.orderService.getOrders(userId);
    }
    return this.orderService.getOrders('404');
  }
}
