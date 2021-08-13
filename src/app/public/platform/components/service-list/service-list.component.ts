import { Component, Input, OnInit } from '@angular/core';
import { ExpertPlatformService } from '../../../../shared/classes/models';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css']
})
export class ServiceListComponent implements OnInit {
  @Input() services!: ExpertPlatformService[];
  @Input() postsPerRow?: number = 4;

  constructor() {
  }

  ngOnInit(): void {
  }
}
