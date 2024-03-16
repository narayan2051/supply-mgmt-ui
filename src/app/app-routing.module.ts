import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {StockComponent} from "./stock/stock.component";
import {AddStockComponent} from "./stock/add-stock/add-stock.component";
import {StockDetailComponent} from "./stock/stock-detail/stock-detail.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'stocks', component: StockComponent},
  {path: 'stocks/add-stock', component: AddStockComponent },
  {path: 'stocks/stock-details', component: StockDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
