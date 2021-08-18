import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-banner-section',
  templateUrl: './home-top-banner-section.component.html',
  styleUrls: ['./home-top-banner-section.component.css']
})
export class HomeTopBannerSectionComponent implements OnInit {
  searchString!: string;

  constructor(
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  public search() {
    if (this.searchString) {
      this.router.navigate(['/search-results/' + this.searchString]);
    }
  }

}
