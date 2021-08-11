import { Component, Input, OnInit } from '@angular/core';
import { Expert } from '../../../../shared/classes/models';
import { ExpertBadgeComponent } from '../expert-badge/expert-badge.component';
import { BlogService } from '../../../blog/services/blog.service';

@Component({
  selector: 'app-expert-badge-in-evidence',
  templateUrl: './expert-badge-in-evidence.component.html',
  styleUrls: ['./expert-badge-in-evidence.component.css']
})
export class ExpertBadgeInEvidenceComponent extends ExpertBadgeComponent implements OnInit {

  constructor(public blogService: BlogService) {
    super(blogService)
  }

  ngOnInit(): void {
  }

}
