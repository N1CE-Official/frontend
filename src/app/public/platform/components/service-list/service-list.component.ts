import { Component, Input, OnInit } from '@angular/core';
import { Service } from '../../../../shared/classes/models';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css']
})
export class ServiceListComponent implements OnInit {
  @Input() services!: Service[];
  @Input() postsPerRow?: number = 4;

  constructor() {
  }

  ngOnInit(): void {
  }
}
