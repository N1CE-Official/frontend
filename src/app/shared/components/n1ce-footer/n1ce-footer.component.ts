import { Component, OnInit } from '@angular/core';
import { PlatformService } from '../../../public/platform/services/platform.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CoingeckoService } from '../../services/coingecko.service';

@Component({
  selector: 'app-n1ce-footer',
  templateUrl: './n1ce-footer.component.html',
  styleUrls: ['./n1ce-footer.component.css']
})
export class N1ceFooterComponent implements OnInit {
  categoryTitles$!: Observable<string []>;
  price$!: Observable<any>;

  constructor(
    public platformService: PlatformService,
    public coingeckoService: CoingeckoService
  ) {
  }

  ngOnInit(): void {
    this.categoryTitles$ = this.platformService.listCategories().pipe(map(list => list.map(category => category.title)));
    this.price$ = this.coingeckoService.getPrice();
  }

}
