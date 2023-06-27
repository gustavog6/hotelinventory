import { InjectionToken } from '@angular/core';

export const localStorageToken: any = new InjectionToken<any>('local storage', {
  providedIn: 'root',
  factory() {
    return localStorage;
  },
});
