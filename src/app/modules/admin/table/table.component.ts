import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from '@interfaces/product.interface';
import { TableOptions } from '@interfaces/table-options.interface';
import { FilterService } from '../services/filter.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input()
  public options!: TableOptions;
  public allProducts: IProduct[] = [];
  public currentProducts: IProduct[] = [];

  public idSortingDirection: boolean = false;
  public nameSortingDirection: boolean = false;
  public priceSortingDirection: boolean = false;

  public currentPage: number = 1;
  public totalPages: number = 0;

  constructor(private filterService: FilterService, private modal: MatDialog) {}

  ngOnInit() {
    this.filterService.getSortedBySearch();
    this.filterService.sortedProducts.subscribe((products) => {
      this.allProducts = products;

      this.currentProducts = this.allProducts.slice(
        this.currentPage * this.options.itemsOnPage - this.options.itemsOnPage,
        this.options.itemsOnPage * this.currentPage
      );

      this.totalPages = Math.round(products.length / this.options.itemsOnPage)
        ? Math.round(products.length / this.options.itemsOnPage)
        : 1;

      this.arrowHandler();
    });
    this.filterService.pageCounter$.subscribe(
      (page) => (this.currentPage = page)
    );
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
    if (
      this.currentPage >=
      Math.round(this.allProducts.length / this.options.itemsOnPage)
    )
      return;
    this.currentPage++;
    this.filterService._pageCounter$.next(this.currentPage);
    this.currentProducts = this.allProducts.slice(
      this.currentPage * this.options.itemsOnPage - this.options.itemsOnPage,
      this.options.itemsOnPage * this.currentPage
    );
  }

  public prevPage() {
    if (this.currentPage === 1) return;
    this.currentPage--;
    this.filterService._pageCounter$.next(this.currentPage);
    this.currentProducts = this.allProducts.slice(
      this.currentPage * this.options.itemsOnPage - this.options.itemsOnPage,
      this.options.itemsOnPage * this.currentPage
    );
  }

  public addProduct() {
    const dialog = this.modal.open(ModalComponent, {
      height: '600px',
      width: '700px',
      data: {
        title: 'Add new product',
        name: '',
        price: null,
        delete: false,
      },
    });
    dialog.afterClosed().subscribe((value) => console.log(value));
  }

  public editProduct(product: IProduct) {
    const editDialog = this.modal.open(ModalComponent, {
      height: '600px',
      width: '700px',
      data: {
        title: ' Edit Product',
        name: product.name,
        id: product.id,
        price: product.price,
        delete: false,
      },
    });
    editDialog.afterClosed().subscribe((value) => console.log(value));
  }

  public deleteProduct(product: IProduct) {
    let deleteDialog = this.modal.open(ModalComponent, {
      height: '230px',
      width: '700px',
      data: {
        title: 'Delete product',
        id: product.id,
        delete: true,
      },
    });
    deleteDialog.afterClosed().subscribe((value) => console.log(value));
  }
}