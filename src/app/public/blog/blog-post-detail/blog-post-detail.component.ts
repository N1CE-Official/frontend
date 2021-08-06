import { Component, Input, OnInit } from '@angular/core';
import { BlogPost } from '../../../shared/models';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../../../shared/service/blog.service';

@Component({
  selector: 'app-blog-post-detail',
  templateUrl: './blog-post-detail.component.html',
  styleUrls: ['./blog-post-detail.component.css']
})
export class BlogPostDetailComponent implements OnInit {
  @Input() blogPost!: BlogPost;

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService) {
  }

  ngOnInit(): void {
    this.getBlogPost();
  }

  getBlogPost(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id != null)
      this.blogService.getPost(id)
        .subscribe(post => this.blogPost = post);
  }

}
