import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home-vote-our-experts-section',
  templateUrl: './home-vote-our-experts-section.component.html',
  styleUrls: ['./home-vote-our-experts-section.component.css']
})
export class HomeVoteOurExpertsSectionComponent implements OnInit {
  latestExpertCandidates$!: Observable<string[]>;

  constructor(
    public route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.latestExpertCandidates$ = this.route.data.pipe(map(data => data.latestExpertCandidates));
  }

}
