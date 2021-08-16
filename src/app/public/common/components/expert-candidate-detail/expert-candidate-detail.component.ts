import { Component, OnInit } from '@angular/core';
import { BlogPost, Expert} from '../../../../shared/classes/models';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-expert-candidate-detail',
  templateUrl: './expert-candidate-detail.component.html',
  styleUrls: ['./expert-candidate-detail.component.css']
})
export class ExpertCandidateDetailComponent implements OnInit {
  expert$!: Observable<Expert>;
  posts$!: Observable<BlogPost[]>;

  constructor(
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.expert$ = this.route.data.pipe(map( data => data.expert));
    this.posts$ = this.route.data.pipe(map(data => data.blogPosts));
  }

}
