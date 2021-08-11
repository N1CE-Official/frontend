import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Expert } from '../../../../shared/classes/models';
import { BlogService } from '../../../blog/services/blog.service';

@Component({
  selector: 'app-expert-badge',
  templateUrl: './expert-badge.component.html',
  styleUrls: ['./expert-badge.component.css']
})
export class ExpertBadgeComponent implements OnInit, OnChanges {
  @Input() expertId!: string;
  expert!: Expert;

  constructor(public blogService: BlogService) {
  }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    if (this.expertId) {
      this.blogService.getExpert(this.expertId).subscribe(exp => this.expert = exp);
    }
  }

}
