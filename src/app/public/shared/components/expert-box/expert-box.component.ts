import { Component, OnInit } from '@angular/core';
import { ExpertBadgeComponent } from '../expert-badge/expert-badge.component';
import { ExpertService } from '../../../common/services/expert.service';

@Component({
  selector: 'app-expert-box',
  templateUrl: './expert-box.component.html',
  styleUrls: ['./expert-box.component.css']
})
export class ExpertBoxComponent extends ExpertBadgeComponent implements OnInit {
  constructor(public expertService: ExpertService) {
    super(expertService)
  }

  ngOnInit(): void {
  }

}
