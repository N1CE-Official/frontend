import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-author-tags',
  templateUrl: './author-tags.component.html',
  styleUrls: ['./author-tags.component.css']
})
export class AuthorTagsComponent implements OnInit {
  @Input() tags!: string[];

  constructor() { }

  ngOnInit(): void {
  }

}
