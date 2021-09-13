import { Component, OnInit } from '@angular/core';
import { BlogPostCardComponent } from '../../../public/blog/components/blog-post-card/blog-post-card.component';
import { BlogService } from '../../../public/blog/services/blog.service';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as heartOutline } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-favorite-blog-post-card',
  templateUrl: './favorite-blog-post-card.component.html',
  styleUrls: ['./favorite-blog-post-card.component.css']
})
export class FavoriteBlogPostCardComponent extends BlogPostCardComponent implements OnInit {
  public icon: IconProp = faHeart;
  public standard = faHeart;
  public inverted = heartOutline;

  constructor(
    public blogService: BlogService
  ) {
    super(blogService);
  }

  ngOnInit(): void {
  }

}
