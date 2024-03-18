import {Component, OnInit} from '@angular/core';
import {ApiService} from "./api.service";
import {AuthService} from "./auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  constructor(public authService: AuthService) {
  }

  title = 'supply-mgmt-ui';
  showFiller: boolean = false;
  sideNavItemsForUser: any = [
    {label: "Stock", icon: 'shopping_cart', link: 'stocks'},
    {label: "Client", icon: '', link: 'clients'},
  ];
  sideNavItemsForAdmin: any = [
    {label: "Dashboard", link: 'admin/dashboard'},
    {label: "Client", icon: '', link: 'clients'},
  ];


}
