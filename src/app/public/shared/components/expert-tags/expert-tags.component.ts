import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-expert-tags',
  templateUrl: './expert-tags.component.html',
  styleUrls: ['./expert-tags.component.css']
})
export class ExpertTagsComponent implements OnInit {
  @Input() tags!: string[];

  constructor() { }

  ngOnInit(): void {
  }

}
