import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {AddStockComponent} from "./add-stock/add-stock.component";
import {AddCategoryComponent} from "./add-category/add-category.component";
import {ApiService} from "../api.service";

export interface Product {
  category: string;
  name: string;
}


const ELEMENT_DATA: Product[] = [
  {category: 'Grocery', name: 'Rice'},
  {category: 'Grocery', name: 'Coca Cola'},
  {category: 'Grocery', name: 'Daal'},
  {category: 'Grocery', name: 'Venegar'},
];

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit {
  displayedColumns: string[] = ['category', 'name', 'action'];
  displayedCategoryColumns: string[] = ['name', 'description'];
  dataSource = ELEMENT_DATA;
  categoryDataSource: any;

  constructor(private router: Router, public dialog: MatDialog, private apiService: ApiService) {
    if (this.router.getCurrentNavigation()?.extras?.state) {
      // @ts-ignore
      let stateData = this.router.getCurrentNavigation()?.extras?.state['product'];
      if (stateData) {
        this.dataSource.push(stateData);
      }
    }
  }

  ngOnInit(): void {
    this.fetchCategoryData();
  }

  private fetchCategoryData() {
    this.apiService.getAllCategories().subscribe((res: any) => {
      this.categoryDataSource = res;
    })
  }

  openAddNewPage() {
    //this.router.navigate(['stocks/add-stock']);
    this.dialog.open(AddStockComponent);
  }

  handleRowClick(product: any) {
    this.router.navigate(['stocks', 'stock-details'], {state: {product: product}})
  }

  openAddNewCategoryDialog() {
    let dialogRef = this.dialog.open(AddCategoryComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result?.action === "submit") {
        this.fetchCategoryData();
      }
    });
  }
}
