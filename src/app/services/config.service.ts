import { Inject, Injectable } from '@angular/core';
import { RouterConfigToken } from './routeConfig.service';
import { RouteConfig } from './routeConfig';

@Injectable({
  providedIn: 'any',
})
export class ConfigService {
  constructor(@Inject(RouterConfigToken) private configToken: RouteConfig) {
    console.log('ConfigService inicializado...');
    console.log(configToken);
  }
}
