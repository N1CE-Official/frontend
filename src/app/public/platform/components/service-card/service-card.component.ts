import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { BlogPost, Expert, Service } from '../../../../shared/classes/models';
import { BlogService } from '../../../blog/services/blog.service';
import { PlatformService } from '../../services/platform.service';

@Component({
  selector: 'app-service-card',
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.css']
})
export class ServiceCardComponent implements OnInit, OnChanges {
  @Input() serviceId!: string;
  service!: Service;
  expert!: Expert;

  constructor(public platformService: PlatformService) { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    if (this.serviceId) {
      this.platformService.getService(this.serviceId).subscribe(
        serv => this.service = serv
      )
    }
  }

}
