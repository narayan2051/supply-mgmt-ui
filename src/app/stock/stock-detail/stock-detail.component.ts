import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";


export interface Product {
  category: string;
  name: string;
  price: number;
  quantity: number;
  unit: String;
}


const ELEMENT_DATA: Product[] = [
  {category: 'Grocery', name: 'Rice', price: 1.0079, quantity: 20, unit: "KG"},
  {category: 'Grocery', name: 'Coca Cola', price: 4.0026, quantity: 100, unit: "Bottle"},
  {category: 'Grocery', name: 'Daal', price: 6.941, quantity: 200, unit: "KG"},
  {category: 'Grocery', name: 'Venegar', price: 9.0122, quantity: 112, unit: "Liter"},
];


@Component({
  selector: 'app-stock-detail',
  templateUrl: './stock-detail.component.html',
  styleUrls: ['./stock-detail.component.scss']
})
export class StockDetailComponent implements OnInit {
  displayedColumns: string[] = ['category', 'name', 'price', 'quantity', 'unit', 'total', 'action'];
  dataSource = ELEMENT_DATA;

  productName: any;

  constructor(private router: Router) {
    if (this.router.getCurrentNavigation()?.extras?.state) {
      // @ts-ignore
      let stateData = this.router.getCurrentNavigation()?.extras?.state['product'];
      if (stateData) {
        this.productName = stateData.name;
      }
    }
  }

  ngOnInit(): void {
  }

  openAddNewPage() {
    this.router.navigate(['stocks/add-stock']);
  }

  handleRowClick() {
    confirm("Go Inside")
  }

}
