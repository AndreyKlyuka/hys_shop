import { Component, OnInit } from '@angular/core';
import { FilterService } from '../services/filter.service';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-count-filter',
  templateUrl: './count-filter.component.html',
  styleUrls: ['./count-filter.component.scss'],
})
export class CountFilterComponent implements OnInit {
  public priceField = new FormControl();
  public optionField = new FormControl();

  constructor(private filterService: FilterService) {}

  ngOnInit() {
    this.priceField.valueChanges
      .pipe(debounceTime(500), distinctUntilChanged())
      .subscribe((value) =>
        value > 0
          ? this.filterService.filterByPrice(value)
          : this.filterService.filterByPrice(0)
      );
    this.optionField.valueChanges
      .pipe(debounceTime(500), distinctUntilChanged())
      .subscribe((value) => this.filterService.filterByOption(value));
  }
}
