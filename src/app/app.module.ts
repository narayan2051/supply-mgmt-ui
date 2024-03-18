import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatButtonModule} from "@angular/material/button";
import {SideNavComponent} from './side-nav/side-nav.component';
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatListModule} from "@angular/material/list";
import {HomeComponent} from './home/home.component';
import {StockComponent} from './stock/stock.component';
import {HeaderComponent} from './header/header.component';
import {MatTableModule} from "@angular/material/table";
import {AddStockComponent} from './stock/add-stock/add-stock.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {ReactiveFormsModule} from "@angular/forms";
import {StockDetailComponent} from './stock/stock-detail/stock-detail.component';
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import {AddCategoryComponent} from './stock/add-category/add-category.component';
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from "@angular/common/http";
import {LoginComponent} from './login/login.component';
import {ApiInterceptorService} from "./api-intercepter.service";
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ClientComponent } from './admin/client/client.component';
import { ClientInfoComponent } from './admin/client/client-info/client-info.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    HomeComponent,
    StockComponent,
    HeaderComponent,
    AddStockComponent,
    StockDetailComponent,
    AddCategoryComponent,
    LoginComponent,
    DashboardComponent,
    ClientComponent,
    ClientInfoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatAutocompleteModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: ApiInterceptorService, multi: true},
    MatDialog, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule {
}
