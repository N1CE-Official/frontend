import { Component, OnInit } from '@angular/core';
import { ExpertBadgeComponent } from '../expert-badge/expert-badge.component';
import { ExpertService } from '../../../common/services/expert.service';

@Component({
  selector: 'app-expert-candidate-card',
  templateUrl: './expert-candidate-card.component.html',
  styleUrls: ['./expert-candidate-card.component.css']
})
export class ExpertCandidateCardComponent extends ExpertBadgeComponent implements OnInit {
  constructor(public expertService: ExpertService) {
    super(expertService)
  }

  ngOnInit(): void {
  }

}
