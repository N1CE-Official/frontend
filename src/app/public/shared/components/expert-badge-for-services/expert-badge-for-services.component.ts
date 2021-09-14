import { Component, OnInit } from '@angular/core';
import { ExpertBadgeComponent } from '../expert-badge/expert-badge.component';
import { ExpertService } from '../../../common/services/expert.service';
import { AuthGuard } from '../../../../auth/auth.guard';
import { Router } from '@angular/router';

@Component({
  selector: 'app-expert-badge-for-services',
  templateUrl: './expert-badge-for-services.component.html',
  styleUrls: ['./expert-badge-for-services.component.css']
})
export class ExpertBadgeForServicesComponent extends ExpertBadgeComponent implements OnInit {
  constructor(
    public expertService: ExpertService,
    public authGuard: AuthGuard,
    public router: Router
  ) {
    super(expertService, authGuard, router)
  }

  ngOnInit(): void {
  }

}
