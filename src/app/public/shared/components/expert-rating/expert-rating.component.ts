import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-expert-rating',
  templateUrl: './expert-rating.component.html',
  styleUrls: ['./expert-rating.component.css']
})
export class ExpertRatingComponent implements OnInit {
  @Input() rating!: number;
  @Input() reviews!: number;

  constructor() { }

  ngOnInit(): void {
  }

}
