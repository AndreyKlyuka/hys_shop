import { Component, OnDestroy, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { FilterService } from '../services/filter.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.scss'],
})
export class SearchFilterComponent implements OnInit, OnDestroy {
  public searchField!: FormControl;

  constructor(private filterService: FilterService) {}

  ngOnInit() {
    this.searchField = new FormControl();
    this.searchField.valueChanges
      .pipe(debounceTime(500), distinctUntilChanged())
      .subscribe((value) => this.filterService.filterByText(value!));
  }

  ngOnDestroy() {}
}
