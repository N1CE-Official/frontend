import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchResult } from '../../../../shared/classes/models';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-search-results-page',
  templateUrl: './search-results-page.component.html',
  styleUrls: ['./search-results-page.component.css']
})
export class SearchResultsPageComponent implements OnInit {
  searchResults$!: Observable<SearchResult[]>;
  searchString!: string | null;

  constructor(
    public route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.searchString = this.route.snapshot.paramMap.get('str');
    this.searchResults$ = this.route.data.pipe(map(data => data.searchResults));
  }

}
