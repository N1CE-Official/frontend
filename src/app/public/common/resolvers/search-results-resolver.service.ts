import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { SearchResult } from '../../../shared/classes/models';
import { SearchService } from '../services/search.service';

@Injectable({
  providedIn: 'root'
})
export class SearchResultsResolverService implements Resolve<SearchResult[]> {

  constructor(public searchService: SearchService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<SearchResult[]> {
    const str = route.paramMap.get('str');
    if (str != null)
      return this.searchService.search(str);
    else return this.searchService.search('');
  }
}
