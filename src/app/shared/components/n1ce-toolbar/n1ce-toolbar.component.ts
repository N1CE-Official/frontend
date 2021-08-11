import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-n1ce-toolbar',
  templateUrl: './n1ce-toolbar.component.html',
  styleUrls: ['./n1ce-toolbar.component.css']
})
export class N1ceToolbarComponent implements OnInit {
  public isMenuCollapsed = true;

  constructor() { }

  ngOnInit(): void {
  }

}
