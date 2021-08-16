import { Component, OnInit } from '@angular/core';
import { PlatformService } from '../../../public/platform/services/platform.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-n1ce-footer',
  templateUrl: './n1ce-footer.component.html',
  styleUrls: ['./n1ce-footer.component.css']
})
export class N1ceFooterComponent implements OnInit {
  categoryTitles$!: Observable<string []>;

  constructor(
    public platformService: PlatformService
  ) {
  }

  ngOnInit(): void {
    this.categoryTitles$ = this.platformService.listCategories().pipe(map(list => list.map(category => category.title)));
  }

}
