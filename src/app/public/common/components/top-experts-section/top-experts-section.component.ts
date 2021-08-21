import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-top-experts-section',
  templateUrl: './top-experts-section.component.html',
  styleUrls: ['./top-experts-section.component.css']
})
export class TopExpertsSectionComponent implements OnInit {
  topExperts$!: Observable<string[]>;

  constructor(
    public route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.topExperts$ = this.route.data.pipe(map(data => data.topExperts));
  }

}
