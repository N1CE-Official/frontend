import { Component, Input, OnInit } from '@angular/core';
import { SearchResult } from '../../../../shared/classes/models';

@Component({
  selector: 'app-search-result-card',
  templateUrl: './search-result-card.component.html',
  styleUrls: ['./search-result-card.component.css']
})
export class SearchResultCardComponent implements OnInit {
  @Input() res!: SearchResult;
  typeClass: string = 'color-accent';

  constructor() {
  }

  ngOnInit(): void {
    if (this.res) {
      if (this.res.type === 'Service') {
        this.typeClass = 'color-primary';
      } else if (this.res.type === 'Blog Post') {
        this.typeClass = 'color-accent';
      } else if (this.res.type === 'Expert') {
        this.typeClass = 'color-black';
      }
    }
  }

}
