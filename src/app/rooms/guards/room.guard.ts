import { inject } from '@angular/core';
import { CanActivateChildFn } from '@angular/router';
import { LoginService } from 'src/app/login/login.service';

export const roomGuard: CanActivateChildFn = (childRoute, state) => {
  return inject(LoginService).isAdmin;
};
