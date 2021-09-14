import { Component, OnInit } from '@angular/core';
import { BlogPostCardComponent } from '../blog-post-card/blog-post-card.component';
import { BlogService } from '../../services/blog.service';
import { AuthGuard } from '../../../../auth/auth.guard';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-post-in-evidence',
  templateUrl: './blog-post-in-evidence.component.html',
  styleUrls: ['./blog-post-in-evidence.component.css']
})
export class BlogPostInEvidenceComponent extends BlogPostCardComponent implements OnInit {

  constructor(
    public blogService: BlogService,
    public authGuard: AuthGuard,
    public router: Router) {
    super(blogService, authGuard, router);
  }

  ngOnInit(): void {
  }

}
