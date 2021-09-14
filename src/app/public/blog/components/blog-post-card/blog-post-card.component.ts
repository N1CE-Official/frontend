import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { BlogPost } from '../../../../shared/classes/models';
import { BlogService } from '../../services/blog.service';
import { TimeUtils } from '../../../../shared/utils/time.utils';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as heartOutline } from '@fortawesome/free-regular-svg-icons';
import { AuthGuard } from '../../../../auth/auth.guard';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-post-card',
  templateUrl: './blog-post-card.component.html',
  styleUrls: ['./blog-post-card.component.css']
})
export class BlogPostCardComponent implements OnInit, OnChanges {
  @Input() postId!: string;
  @Input() post!: BlogPost | null;
  public currentFavoriteIcon: IconProp = heartOutline;
  public isFavoriteIcon = faHeart;
  public notFavoriteIcon = heartOutline;

  constructor(
    public blogService: BlogService,
    public authGuard: AuthGuard,
    public router: Router
  ) {
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

  setFavorite() {
    if (this.authGuard.checkLogin(this.router.url)) {
      this.currentFavoriteIcon = (this.currentFavoriteIcon === this.isFavoriteIcon ? this.notFavoriteIcon : this.isFavoriteIcon);
    }
  }

}
