import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-catalog-filters',
  templateUrl: './catalog-filters.component.html',
  styleUrls: ['./catalog-filters.component.css']
})
export class CatalogFiltersComponent implements OnInit {
  @Input() categories!: string[];
  @Input() selectedCategory!: string | null;
  @Output() categoryChange = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {
  }

  filter(tag: string): void {
    this.selectedCategory = tag;
    this.categoryChange.emit(this.selectedCategory);
  }

}
