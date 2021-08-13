import { Component, OnInit } from '@angular/core';
import { ExpertBadgeComponent } from '../expert-badge/expert-badge.component';
import { ExpertService } from '../../../common/services/expert.service';

@Component({
  selector: 'app-expert-badge-for-services',
  templateUrl: './expert-badge-for-services.component.html',
  styleUrls: ['./expert-badge-for-services.component.css']
})
export class ExpertBadgeForServicesComponent extends ExpertBadgeComponent implements OnInit {
  constructor(public expertService: ExpertService) {
    super(expertService)
  }

  ngOnInit(): void {
  }

}
