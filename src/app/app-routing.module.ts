import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {StockComponent} from "./stock/stock.component";
import {AddStockComponent} from "./stock/add-stock/add-stock.component";
import {StockDetailComponent} from "./stock/stock-detail/stock-detail.component";
import {LoginComponent} from "./login/login.component";
import {LoginGuardService} from "./login-guard.service";
import {DashboardComponent} from "./admin/dashboard/dashboard.component";

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'admin/dashboard', component: DashboardComponent},
  {path: 'stocks', component: StockComponent, canActivate: [LoginGuardService]},
  {path: 'stocks/add-stock', component: AddStockComponent, canActivate: [LoginGuardService]},
  {path: 'stocks/stock-details', component: StockDetailComponent, canActivate: [LoginGuardService]},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
