import { Component, OnInit } from '@angular/core';
import { ExpertBadgeComponent } from '../expert-badge/expert-badge.component';
import { ExpertService } from '../../../common/services/expert.service';

@Component({
  selector: 'app-expert-badge-in-evidence',
  templateUrl: './expert-badge-in-evidence.component.html',
  styleUrls: ['./expert-badge-in-evidence.component.css']
})
export class ExpertBadgeInEvidenceComponent extends ExpertBadgeComponent implements OnInit {
  constructor(public expertService: ExpertService) {
    super(expertService)
  }

  ngOnInit(): void {
  }

}
