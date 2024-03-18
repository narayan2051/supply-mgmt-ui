import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable, Subject, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiInterceptorService implements HttpInterceptor {

  constructor() {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let token = sessionStorage.getItem("token");
    if (token) {
      let requestWithToken = request.clone({
        setHeaders: {
          Authorization: 'Bearer ' + token
        }
      });
      return next.handle(requestWithToken);
    }
    return next.handle(request);
  }
}
