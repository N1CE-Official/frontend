import { Component, OnInit } from '@angular/core';
import { Category } from '../models';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
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
