import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceCategory } from '../../../../shared/classes/models';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-categories-section',
  templateUrl: './home-categories-section.component.html',
  styleUrls: ['./home-categories-section.component.css']
})
export class HomeCategoriesSectionComponent implements OnInit {
  categories$!: Observable<ServiceCategory[]>;

  constructor(public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.categories$ = this.route.data.pipe(map(data => data.categories));
  }

}
