import {
  AfterViewInit,
  Component,
  Inject,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';
import { LoggerService } from './logger.service';
import { localStorageToken } from './localstorage.token';
import { InitService } from './init.service';
import { ConfigService } from './services/config.service';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'hinv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'hotelinventoryapp';

  @ViewChild('user', { read: ViewContainerRef }) vcr!: ViewContainerRef;

  // ngAfterViewInit(): void {
  //   const componentRef = this.vcr.createComponent(RoomsComponent);

  //   componentRef.instance.numberOfRooms = 25;
  // }

  constructor(
    private loggerService: LoggerService,
    @Inject(localStorageToken) private localStorage: any,
    private initService: InitService,
    private configService: ConfigService,
    private router: Router
  ) {
    console.log(initService.config);
  }

  ngOnInit(): void {
    // this.router.events.subscribe((e) => console.log(e));

    this.router.events
      .pipe(filter((e) => e instanceof NavigationStart))
      .subscribe(() => console.log('Navigation started'));

    this.router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe(() => console.log('Navigation ended'));

    this.loggerService?.log('AppComponent.ngOnInit()');

    this.localStorage.setItem('name', 'SANGUXXI Hotel');
  }

  // ngAfterViewInit(): void {
  //   const jeje = this.vcr.createComponent(RoomsComponent);

  //   jeje.instance.numberOfRooms = 25;
  // }

  // role = 'Admin';
}
