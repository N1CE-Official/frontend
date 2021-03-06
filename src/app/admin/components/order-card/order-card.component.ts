import { Component, Input, OnInit } from '@angular/core';
import { Order } from '../../../shared/classes/models';
import { TimeUtils } from '../../../shared/utils/time.utils';

@Component({
  selector: 'app-order-card',
  templateUrl: './order-card.component.html',
  styleUrls: ['./order-card.component.css']
})
export class OrderCardComponent implements OnInit {
  @Input() orderId!: string;
  @Input() order!: Order;

  constructor() {
  }

  ngOnInit(): void {
  }

  getDate(date: string) : Date{
    return TimeUtils.toDate(date, true);
  }
}
