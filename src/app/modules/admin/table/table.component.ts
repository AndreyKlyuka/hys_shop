import { Component, Input, OnInit } from '@angular/core';
import { TableOptions } from '@interfaces/table-options.interface';
import { FilterService } from '../services/filter.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { BaseHttpService } from '@shared/services/base-http.service';
import { ITableItem } from '@interfaces/table-item.interface';
import { ProductsHttpService } from '@pages/products/products-http.service';
import { Observable } from 'rxjs';
import { UsersHttpService } from '../services/users-http.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent<T extends ITableItem> implements OnInit {
  @Input()
  public options!: TableOptions;
  @Input()
  public itemsService!: BaseHttpService;
  public allItems: T[] = [];
  public currentItems: T[] = [];
  public items$!: Observable<T[]>;

  public idSortingDirection: boolean = false;
  public nameSortingDirection: boolean = false;
  public priceSortingDirection: boolean = false;

  public pageHTTP!: string;

  public currentPage: number = 1;
  public totalPages: number = 0;

  constructor(
    private filterService: FilterService<T>,
    private productsService: ProductsHttpService,
    private usersService: UsersHttpService,
    private modal: MatDialog
  ) {}

  ngOnInit() {
    this.pageHTTP = this.options.itemType.name;
    this.filterService._pageCounter$.next(this.currentPage);
    this.totalPages = 0;

    if (this.options.itemType.name === 'Products')
      this.items$ = this.productsService.getAll<T[]>();
    if (this.options.itemType.name === 'Users')
      this.items$ = this.usersService.getAll<T[]>();

    this.itemsService.getAll<T[]>().subscribe((items) => {
      this.filterService.getSortedBySearch(items);

      this.filterService.sortedItems.subscribe((items) => {
        this.allItems = items;
        this.currentItems = this.allItems.slice(
          this.currentPage * this.options.itemsOnPage -
            this.options.itemsOnPage,
          this.options.itemsOnPage * this.currentPage
        );

        this.totalPages = Math.ceil(
          this.allItems.length / this.options.itemsOnPage
        );

        this.arrowHandler();
      });

      this.filterService.pageCounter$.subscribe(
        (page) => (this.currentPage = page)
      );
    });
  }

  public sortById() {
    this.filterService.sortById();
  }

  public sortByName() {
    this.filterService.sortByName();
  }

  public sortByPrice() {
    this.filterService.sortByPrice();
  }

  private arrowHandler() {
    this.idSortingDirection = this.filterService.idSortingDirection;
    this.priceSortingDirection = this.filterService.priceSortingDirection;
    this.nameSortingDirection = this.filterService.nameSortingDirection;
  }

  public nextPage() {
    if (this.currentPage >= this.totalPages) return;
    this.currentPage++;
    this.filterService._pageCounter$.next(this.currentPage);
    this.currentItems = this.allItems.slice(
      this.currentPage * this.options.itemsOnPage - this.options.itemsOnPage,
      this.options.itemsOnPage * this.currentPage
    );
  }

  public prevPage() {
    if (this.currentPage === 1) return;
    this.currentPage--;
    this.filterService._pageCounter$.next(this.currentPage);
    this.currentItems = this.allItems.slice(
      this.currentPage * this.options.itemsOnPage - this.options.itemsOnPage,
      this.options.itemsOnPage * this.currentPage
    );
  }

  public addItem() {
    if (this.pageHTTP === 'Users') {
      const dialog = this.modal.open(ModalComponent, {
        height: '500px',
        width: '700px',
        data: {
          page: this.pageHTTP,
          delete: false,
          title: `Add new ${this.options.itemType.oneItem}`,
          name: '',
          password: null,
        },
      });
      dialog.afterClosed().subscribe((value) => {
        if (!value) return;
        const newItem: any = {
          username: value.name,
          password: value.password,
        };
        console.log(value);
        this.itemsService.create<T>(newItem).subscribe((data) => {
          this.ngOnInit();
        });
      });
    }
    if (this.pageHTTP === 'Products') {
      const dialog = this.modal.open(ModalComponent, {
        height: '700px',
        width: '700px',
        data: {
          page: this.pageHTTP,
          delete: false,
          title: `Add new ${this.options.itemType.oneItem}`,
          name: '',
          description: '',
        },
      });
      dialog.afterClosed().subscribe((value) => {
        if (!value) return;
        const newItem: any = {
          name: value.name,
          price: value.price,
          description: value.description,
        };
        this.itemsService.create<T>(newItem).subscribe((data) => {
          this.ngOnInit();
        });
      });
    }
  }

  public editItem(item: T) {
    if (this.pageHTTP === 'Users') {
      const dialog = this.modal.open(ModalComponent, {
        height: '500px',
        width: '700px',
        data: {
          page: this.pageHTTP,
          delete: false,
          update: true,
          title: `Edit ${this.options.itemType.oneItem} ${item.id}`,
          password: null,
        },
      });
      dialog.afterClosed().subscribe((value) => {
        if (!value) return;
        const edited = (({ id, ...object }) => object)(value);

        this.itemsService.update<T>(item.id!, edited).subscribe((data) => {
          this.ngOnInit();
        });
      });
    }
    if (this.pageHTTP === 'Products') {
      const dialog = this.modal.open(ModalComponent, {
        height: '700px',
        width: '700px',
        data: {
          page: this.pageHTTP,
          delete: false,
          title: `Edit ${this.options.itemType.oneItem}`,
          name: item.name,
          id: item.id,
          price: item.price,
          description: item.description,
        },
      });
      dialog.afterClosed().subscribe((value) => {
        if (!value) return;
        const edited = (({ id, ...object }) => object)(value);
        this.itemsService.update<T>(item.id!, edited).subscribe((data) => {
          this.ngOnInit();
        });
      });
    }
  }

  public deleteItem(item: T) {
    let deleteDialog = this.modal.open(ModalComponent, {
      height: '300px',
      width: '700px',
      data: {
        title: `Delete ${this.options.itemType.oneItem}`,
        id: item.id,
        delete: true,
      },
    });
    deleteDialog.afterClosed().subscribe((value) => {
      if (!value) return;
      this.itemsService.delete(item.id!).subscribe((data) => {
        this.ngOnInit();
      });
    });
  }
}
