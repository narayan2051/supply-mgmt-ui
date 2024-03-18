import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {ApiService} from "../../api.service";
import {AddStockComponent} from "../../stock/add-stock/add-stock.component";
import {AddCategoryComponent} from "../../stock/add-category/add-category.component";
import {ClientInfoComponent} from "./client-info/client-info.component";

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  displayedColumns: string[] = ['name', 'phone', 'pan', 'address', 'action'];
  dataSource: any = [];

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
    this.fetchAllClients();
  }

  private fetchAllClients() {
    this.apiService.getAllCompanyInfos().subscribe((res: any) => {
      this.dataSource = res;
    })
  }

  openAddNewPage() {
    let dialogRef = this.dialog.open(ClientInfoComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result?.action === "submit") {
        this.fetchAllClients();
      }
    });
  }

}
