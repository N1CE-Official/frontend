import { Component, OnInit } from '@angular/core';
import { Category } from '../../../shared/models';
import { BlogService } from '../../../shared/service/blog.service';

@Component({
  selector: 'app-blog-backbone',
  templateUrl: './blog-backbone.component.html',
  styleUrls: ['./blog-backbone.component.css']
})
export class BlogBackboneComponent implements OnInit {
  categories: Category [] = [];
  inEvidenceCategory!: Category;

  constructor(public blogService: BlogService) {
  }

  ngOnInit(): void {
    this.blogService.listCategories().subscribe(list => {
      this.categories = list;
    });
    this.blogService.inEvidenceCategory().subscribe(inEvidenceCategory => {
      this.inEvidenceCategory = inEvidenceCategory;
    });
  }

}
