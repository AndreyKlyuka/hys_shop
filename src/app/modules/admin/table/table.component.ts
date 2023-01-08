import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from '@interfaces/product.interface';
import { INewProduct } from '@interfaces/new-product.interface';
import { TableOptions } from '@interfaces/table-options.interface';
import { FilterService } from '../services/filter.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { ProductsHttpService } from '@pages/products/products-http.service';

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

  constructor(
    private filterService: FilterService,
    private productsHTTPService: ProductsHttpService,
    private modal: MatDialog
  ) {}

  ngOnInit() {
    this.filterService.getSortedBySearch();
    this.filterService.sortedProducts.subscribe((products) => {
      this.allProducts = products;

      this.currentProducts = this.allProducts.slice(
        this.currentPage * this.options.itemsOnPage - this.options.itemsOnPage,
        this.options.itemsOnPage * this.currentPage
      );

      this.totalPages = Math.ceil(
        this.allProducts.length / this.options.itemsOnPage
      );

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
    if (this.currentPage >= this.totalPages) return;
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
    dialog.afterClosed().subscribe((value) => {
      if (!value) return;
      const newProduct: INewProduct = {
        name: value.name,
        price: value.price,
        description: value.description,
      };
      this.productsHTTPService
        .create<INewProduct>(newProduct)
        .subscribe((data) => {
          this.ngOnInit();
        });
    });
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
        // description:
        delete: false,
      },
    });
    editDialog.afterClosed().subscribe((value) => {
      if (!value) return;
      const edited = (({ id, ...object }) => object)(value);

      this.productsHTTPService
        .update<INewProduct>(product.id, edited)
        .subscribe((data) => {
          this.ngOnInit();
        });
    });
  }

  public deleteProduct(product: IProduct) {
    let deleteDialog = this.modal.open(ModalComponent, {
      height: '230px',
      width: '700px',
      data: {
        title: 'Delete product',
        id: product.id,
        // de
        delete: true,
      },
    });
    deleteDialog.afterClosed().subscribe((value) => {
      this.productsHTTPService.delete(product.id).subscribe((data) => {
        this.ngOnInit();
      });
    });
  }
}
