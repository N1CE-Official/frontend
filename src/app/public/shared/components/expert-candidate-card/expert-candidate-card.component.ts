import { Component, OnChanges, OnInit } from '@angular/core';
import { ExpertBadgeComponent } from '../expert-badge/expert-badge.component';
import { ExpertService } from '../../../common/services/expert.service';
import { TimeUtils } from '../../../../shared/utils/time.utils';

@Component({
  selector: 'app-expert-candidate-card',
  templateUrl: './expert-candidate-card.component.html',
  styleUrls: ['./expert-candidate-card.component.css']
})
export class ExpertCandidateCardComponent extends ExpertBadgeComponent implements OnInit, OnChanges {
  leftSeconds!: number;

  constructor(public expertService: ExpertService) {
    super(expertService)
  }

  ngOnInit(): void {

  }

  ngOnChanges(): void {
    if (this.expertId) {
      this.expertService.getExpert(this.expertId).subscribe(exp => {
        this.expert = exp;
        if (this.expert.candidatureEndTime) {
          this.leftSeconds = TimeUtils.leftTime(this.expert.candidatureEndTime);
        }
      });
    }
  }

  formatDate = TimeUtils.formatDate;

}
