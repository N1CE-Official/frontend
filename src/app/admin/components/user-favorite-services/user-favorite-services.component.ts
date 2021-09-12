import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserFavoriteService } from '../../../shared/classes/models';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-user-favorite-services',
  templateUrl: './user-favorite-services.component.html',
  styleUrls: ['./user-favorite-services.component.css']
})
export class UserFavoriteServicesComponent implements OnInit {
  favoriteServices$!: Observable<UserFavoriteService[]>;

  constructor(
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.favoriteServices$ = this.route.data.pipe(map(data => data.favoriteServices));
  }
}
