import { Component, Input, OnInit } from '@angular/core';
import { FilterService } from '../services/filter.service';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { ITableItem } from '@interfaces/table-item.interface';

@Component({
  selector: 'app-count-filter',
  templateUrl: './count-filter.component.html',
  styleUrls: ['./count-filter.component.scss'],
})
export class CountFilterComponent<T extends ITableItem> implements OnInit {
  @Input()
  public service: string = '';
  @Input()
  public data!: T[];
  public priceField = new FormControl();
  public optionField = new FormControl();

  constructor(private filterService: FilterService<T>) {}

  ngOnInit() {
    this.priceField.valueChanges
      .pipe(debounceTime(500), distinctUntilChanged())
      .subscribe((value) => this.filterService.filterByPrice(value, this.data));
    this.optionField.valueChanges
      .pipe(debounceTime(500), distinctUntilChanged())
      .subscribe((value) =>
        this.filterService.filterByOption(value, this.data)
      );
  }
}
