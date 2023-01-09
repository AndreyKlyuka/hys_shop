import { Component, Input, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { FilterService } from '../services/filter.service';
import { FormControl } from '@angular/forms';
import { ITableItem } from '@interfaces/table-item.interface';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.scss'],
})
export class SearchFilterComponent<T extends ITableItem> implements OnInit {
  @Input()
  public data: T[] = [];
  public searchField!: FormControl;

  constructor(private filterService: FilterService<T>) {}

  ngOnInit() {
    this.searchField = new FormControl();
    this.searchField.valueChanges
      .pipe(debounceTime(500), distinctUntilChanged())
      .subscribe((value) => this.filterService.filterByText(value, this.data));
  }
}
