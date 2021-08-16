import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home-top-services-section',
  templateUrl: './home-top-services-section.component.html',
  styleUrls: ['./home-top-services-section.component.css']
})
export class HomeTopServicesSectionComponent implements OnInit {
  topServices$!: Observable<string[]>;

  constructor(
    public route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.topServices$ = this.route.data.pipe(map(data => data.topServices));
  }

}
