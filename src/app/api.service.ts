import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  categoryURL: string = "http://localhost:8080/api/v1/categories";
  productURL: string = "http://localhost:8080/api/v1/products";
  loginURL: string = "http://localhost:8080/api/v1/login";
  companyInfoURL = "http://localhost:8080/api/v1/admin/company-infos";

  constructor(private httpClient: HttpClient) {
  }

  saveCategory(data: any) {
    return this.httpClient.post(this.categoryURL, data);
  }

  getAllCategories() {
    return this.httpClient.get(this.categoryURL);
  }

  login(data: any) {
    return this.httpClient.post(this.loginURL, data);
  }

  saveCompanyInfo(data: any) {
    return this.httpClient.post(this.companyInfoURL, data);
  }

  getAllCompanyInfos() {
    return this.httpClient.get(this.companyInfoURL);
  }

}
