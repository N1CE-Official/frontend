import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-n1ce-custom-title',
  templateUrl: './n1ce-custom-title.component.html',
  styleUrls: ['./n1ce-custom-title.component.css']
})
export class N1ceCustomTitleComponent implements OnInit {
  @Input() titleText: string;

  constructor() {
    this.titleText = '';
  }

  ngOnInit(): void {
  }

}
