import { Component, OnInit } from '@angular/core';
import { BlogPostCardComponent } from '../blog-post-card/blog-post-card.component';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog-post-in-evidence',
  templateUrl: './blog-post-in-evidence.component.html',
  styleUrls: ['./blog-post-in-evidence.component.css']
})
export class BlogPostInEvidenceComponent extends BlogPostCardComponent implements OnInit {

  constructor(public blogService: BlogService) {
    super(blogService);
  }

  ngOnInit(): void {
  }

}
