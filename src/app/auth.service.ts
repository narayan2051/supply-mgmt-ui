import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {
  }

  getToken(): string | null {
    return sessionStorage.getItem('token');
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  logout(): void {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('role');
  }

  isAdmin() {
    let role = sessionStorage.getItem("role");
    return role && role==="ADMIN";
  }
}
