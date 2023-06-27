import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../login/login.service';

export const loginGuard: CanActivateFn = (route, state) => {
  return inject(LoginService).isLoggedIn
    ? true
    : inject(Router).navigate(['/login']);
};
