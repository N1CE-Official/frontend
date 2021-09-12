import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserFavoritePost } from '../../../shared/classes/models';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-user-favorite-posts',
  templateUrl: './user-favorite-posts.component.html',
  styleUrls: ['./user-favorite-posts.component.css']
})
export class UserFavoritePostsComponent implements OnInit {
  favoritePosts$!: Observable<UserFavoritePost[]>;

  constructor(
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.favoritePosts$ = this.route.data.pipe(map(data => data.favoritePosts));
  }

}
