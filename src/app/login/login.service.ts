import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class LoginService {
  
  isAdmin: boolean = false;

  isLoggedIn: boolean = false;

  constructor() {}

  login(email: string, password: string) {
    if (email === 'gustavoadolfogg@gmail.com' && password === 'admin') {
      this.isLoggedIn = true;
      this.isAdmin = true;
    } else if (email === 'gustavoadolfogg@gmail.com' && password === 'user') {
      this.isLoggedIn = true;
      this.isAdmin = false;
    }
    return this.isLoggedIn;
  }
}
