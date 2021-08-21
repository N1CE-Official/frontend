import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-vote-our-experts-section',
  templateUrl: './vote-our-experts-section.component.html',
  styleUrls: ['./vote-our-experts-section.component.css']
})
export class VoteOurExpertsSectionComponent implements OnInit {
  expertCandidates$!: Observable<string[]>;

  constructor(
    public route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.expertCandidates$ = this.route.data.pipe(map(data => data.expertCandidates));
  }

}
