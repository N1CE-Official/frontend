import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../../../shared/classes/models';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-user-orders',
  templateUrl: './user-orders.component.html',
  styleUrls: ['./user-orders.component.css']
})
export class UserOrdersComponent implements OnInit {
  orders$!: Observable<Order[]>;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.orders$ = this.route.data.pipe(map( data => data.orders));
  }

}
