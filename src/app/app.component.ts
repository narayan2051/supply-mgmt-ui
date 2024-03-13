import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'supply-mgmt-ui';
  showFiller: boolean = false;
  sideNavItems: any = [
    {label: "Home", icon: 'home',link:'/'},
    {label: "Stock", icon: 'shopping_cart',link:'stocks'},
    {label: "Client", icon:'', link:'clients'},
    {label: "Logout", icon: '', link: 'logout'},
  ];
}
