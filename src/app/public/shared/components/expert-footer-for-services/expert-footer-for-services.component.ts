import { Component, OnInit } from '@angular/core';
import { ExpertBadgeComponent } from '../expert-badge/expert-badge.component';
import { ExpertService } from '../../../common/services/expert.service';

@Component({
  selector: 'app-expert-footer-for-services',
  templateUrl: './expert-footer-for-services.component.html',
  styleUrls: ['./expert-footer-for-services.component.css']
})
export class ExpertFooterForServicesComponent extends ExpertBadgeComponent implements OnInit {
  constructor(public expertService: ExpertService) {
    super(expertService)
  }

  ngOnInit(): void {
  }

}
