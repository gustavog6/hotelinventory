import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'hinv-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  email: string = '';
  password: any = '';

  constructor(private route: Router, private loginService: LoginService) {}

  login() {
    if (this.loginService.login(this.email, this.password)) {
      alert('login successfull');
      // this.route.navigate(['/rooms', 'add']);
      this.route.navigate(['/rooms']);
      // this.route.navigateByUrl('/rooms/add');
    }
  }
}
