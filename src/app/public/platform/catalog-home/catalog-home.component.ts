import { Component, OnInit } from '@angular/core';
import { Service, ServiceCategory } from '../../../shared/models';
import { PlatformService } from '../../../shared/service/platform.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-catalog-home',
  templateUrl: './catalog-home.component.html',
  styleUrls: ['./catalog-home.component.css']
})
export class CatalogHomeComponent implements OnInit {
  categories: ServiceCategory [] = [];
  services: Service[] = [];
  categoryTitles: string [] = [];

  constructor(public platformService: PlatformService) {
  }

  ngOnInit(): void {
    this.platformService.listCategories().subscribe(list => {
      this.categories = list;
      this.categoryTitles = this.categories.map(category => category.title)
    });
    this.platformService.listServices().subscribe(list => this.services = list);
  }

  filter(evt: string) {
    if (evt === '') {
      this.platformService.listServices().subscribe(list => this.services = list);
    } else {
      this.platformService.listServices()
        .pipe(map(list => list.filter(service => service.category === evt)))
        .subscribe(list =>  this.services = list);
    }
  }

}
