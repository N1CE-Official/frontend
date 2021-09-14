import { Component, OnInit } from '@angular/core';
import { ExpertBadgeComponent } from '../expert-badge/expert-badge.component';
import { ExpertService } from '../../../common/services/expert.service';
import { ExpertPlatformService } from '../../../../shared/classes/models';
import { AuthGuard } from '../../../../auth/auth.guard';
import { Router } from '@angular/router';

@Component({
  selector: 'app-expert-box',
  templateUrl: './expert-box.component.html',
  styleUrls: ['./expert-box.component.css']
})
export class ExpertBoxComponent extends ExpertBadgeComponent implements OnInit {
  service!: ExpertPlatformService;

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
