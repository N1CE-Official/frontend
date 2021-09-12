import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserFavoritePost, UserFavoriteService } from '../../shared/classes/models';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserFavoritesService {
  private favoriteServicesUrl = 'api/userFavoriteServices';
  private favoritePostsUrl = 'api/userFavoritePosts';

  constructor(
    private http: HttpClient,
  ) {
  }

  public getFavoriteServices(userId: string): Observable<UserFavoriteService[]> {
    return this.http.get<UserFavoriteService[]>(this.favoriteServicesUrl).pipe(
      map(list => list.filter(order => order.userId === userId))
    );
  }

  public getFavoritePosts(userId: string): Observable<UserFavoritePost[]> {
    return this.http.get<UserFavoritePost[]>(this.favoritePostsUrl).pipe(
      map(list => list.filter(order => order.userId === userId))
    );
  }
}
