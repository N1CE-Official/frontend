import { Component, OnInit } from '@angular/core';
import { Service, ServiceCategory } from '../../../shared/models';
import { PlatformService } from '../../../shared/service/platform.service';

@Component({
  selector: 'app-catalog-home',
  templateUrl: './catalog-home.component.html',
  styleUrls: ['./catalog-home.component.css']
})
export class CatalogHomeComponent implements OnInit {
  categories: ServiceCategory [] = [];
  services: Service[] = [];

  constructor(public platformService: PlatformService) {
  }

  ngOnInit(): void {
    this.platformService.listCategories().subscribe(list => this.categories = list);
    this.platformService.listServices().subscribe(list => {
      this.services = list;
    });
  }

}
