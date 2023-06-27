import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';
import { LoginService } from 'src/app/login/login.service';

export const roomLLGuard: CanMatchFn = (route, segments) => {
  return inject(LoginService).isLoggedIn;
};
