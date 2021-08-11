import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../../blog/services/blog.service';
import { ExpertBadgeComponent } from '../expert-badge/expert-badge.component';

@Component({
  selector: 'app-expert-box',
  templateUrl: './expert-box.component.html',
  styleUrls: ['./expert-box.component.css']
})
export class ExpertBoxComponent extends ExpertBadgeComponent implements OnInit {
  constructor(public blogService: BlogService) {
    super(blogService)
  }

  ngOnInit(): void {
  }

}
