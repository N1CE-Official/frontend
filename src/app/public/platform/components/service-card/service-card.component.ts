import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Expert, ExpertPlatformService } from '../../../../shared/classes/models';
import { PlatformService } from '../../services/platform.service';

@Component({
  selector: 'app-service-card',
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.css']
})
export class ServiceCardComponent implements OnInit, OnChanges {
  @Input() serviceId!: string;
  service!: ExpertPlatformService;
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
