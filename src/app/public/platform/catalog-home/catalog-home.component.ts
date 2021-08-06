import { Component, OnInit } from '@angular/core';
import { BlogCategory, ServiceCategory } from '../../../shared/models';
import { BlogService } from '../../../shared/service/blog.service';
import { PlatformService } from '../../../shared/service/platform.service';

@Component({
  selector: 'app-catalog-home',
  templateUrl: './catalog-home.component.html',
  styleUrls: ['./catalog-home.component.css']
})
export class CatalogHomeComponent implements OnInit {
  categories: ServiceCategory [] = [];

  constructor(public platformService: PlatformService) {
  }

  ngOnInit(): void {
    this.platformService.listCategories().subscribe(list => {
      this.categories = list;
    });
  }

}
