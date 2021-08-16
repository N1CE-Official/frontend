import { Component, OnInit } from '@angular/core';
import { ExpertPlatformService} from '../../../../shared/classes/models';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-catalog-home',
  templateUrl: './catalog-home.component.html',
  styleUrls: ['./catalog-home.component.css']
})
export class CatalogHomeComponent implements OnInit {
  categoryTitles$!: Observable<string[]>;
  originalServices$!: Observable<ExpertPlatformService[]>;
  services$!: Observable<ExpertPlatformService[]>;
  selectedCategory!: string | null;

  constructor(
    public route: ActivatedRoute,
    public location: Location) {
  }

  ngOnInit(): void {
    this.categoryTitles$ = this.route.data.pipe(map(data => data.categoryTitles));
    this.originalServices$ = this.route.data.pipe(map(data => data.services));
    this.selectedCategory = this.route.snapshot.paramMap.get('category');
    if(!this.selectedCategory) this.selectedCategory = '';
    this.filter(this.selectedCategory);
  }

  filter(evt: string) {
    if (evt === '') {
      this.services$ = this.originalServices$;
    } else {
      this.services$ = this.originalServices$
        .pipe(map(list => list.filter(service => service.category === evt)));
    }
    this.location.replaceState("/explore/" + evt);
  }

}
