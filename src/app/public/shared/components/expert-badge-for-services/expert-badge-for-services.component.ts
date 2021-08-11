import { Component, Input, OnInit } from '@angular/core';
import { Expert } from '../../../../shared/classes/models';
import { ExpertBadgeComponent } from '../expert-badge/expert-badge.component';
import { BlogService } from '../../../blog/services/blog.service';

@Component({
  selector: 'app-expert-badge-for-services',
  templateUrl: './expert-badge-for-services.component.html',
  styleUrls: ['./expert-badge-for-services.component.css']
})
export class ExpertBadgeForServicesComponent extends ExpertBadgeComponent implements OnInit {

  constructor(public blogService: BlogService) {
    super(blogService)
  }

  ngOnInit(): void {
  }

}
