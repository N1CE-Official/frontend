import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { BlogPost } from '../../../../shared/classes/models';
import { BlogService } from '../../services/blog.service';
import { TimeUtils } from '../../../../shared/utils/time.utils';

@Component({
  selector: 'app-blog-post-card',
  templateUrl: './blog-post-card.component.html',
  styleUrls: ['./blog-post-card.component.css']
})
export class BlogPostCardComponent implements OnInit, OnChanges {
  @Input() postId!: string;
  @Input() post!: BlogPost | null;

  constructor(
    public blogService: BlogService) {
  }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    if (!this.post && this.postId) {
      this.blogService.getPost(this.postId).subscribe(
        p => this.post = p
      )
    }
  }

  toDate(date: string): Date {
    return TimeUtils.toDate(date);
  }

}
