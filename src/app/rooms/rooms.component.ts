import {
  AfterViewInit,
  Component,
  DoCheck,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
  OnDestroy,
  SkipSelf,
} from '@angular/core';
import { Room, RoomsList } from './rooms';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from './services/rooms.service';
import { Observable, Subject, Subscription, catchError, map, of } from 'rxjs';
import { HttpEventType } from '@angular/common/http';
import { ConfigService } from '../services/config.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent
  implements OnInit, DoCheck, AfterViewInit, OnDestroy
{
  /**************************** VARIABLES ****************************/

  hotelName: string = 'SANGUXXI hotel';

  ListTitle: string = 'All Rooms List';

  numberOfRooms = 10;

  hideRooms = true;

  rooms: Room = { totalRooms: 20, availableRooms: 10, bookedRooms: 5 };

  roomList: Array<RoomsList> = [];

  totalBytes: number = 0;

  subscription!: Subscription;

  error$ = new Subject<string>();

  getError$ = this.error$.asObservable();

  rooms$ = this.roomsService.getRoomList$.pipe(
    catchError((err) => {
      // console.log(err);
      this.error$.next(err.message);
      return of([]);
    })
  );

  roomsCount$ = this.roomsService.getRoomList$.pipe(
    map((rooms) => rooms.length)
  );

  /**************************** VARIABLES ****************************/

  priceFilter = new FormControl(0);

  stream = new Observable((observer) => {
    observer.next('user1');
    observer.next('user2');
    observer.next('user3');
    observer.complete();
  });

  constructor(
    @SkipSelf() private roomsService: RoomsService,
    private configService: ConfigService
  ) {}

  // solo va a tener acceso a la primera instancia del componente
  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;

  @ViewChildren(HeaderComponent)
  headerChildrenComponent!: QueryList<HeaderComponent>;

  ngOnInit(): void {
    // this.roomList = this.roomsService.getRoomList();
    this.stream.subscribe({
      next: (value) => console.log(value),
      complete: () => console.log('complete...'),
      error: (err) => console.log(err),
    });

    this.stream.subscribe((user) => {
      console.log(user);
    });

    // this.subscription = this.roomsService.getRoomList$.subscribe((rooms) => {
    //   this.roomList = rooms;
    // });

    this.roomsService.getPhotos().subscribe((event) => {
      switch (event.type) {
        case HttpEventType.Sent:
          console.log('request has been made!');
          break;
        case HttpEventType.ResponseHeader:
          console.log('Request succeess!');
          break;

        case HttpEventType.DownloadProgress:
          this.totalBytes = event.loaded;
          break;

        case HttpEventType.Response:
          console.log(event.body);
          break;

        default:
          break;
      }
    });

    // console.log(this.headerComponent);
  }

  ngDoCheck(): void {
    console.log('onChanges is called | DoCheck');
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
    this.ListTitle = 'Room List';
  }

  selectRoom(room: RoomsList) {
    console.log(room);
  }

  addRoom() {
    const room: RoomsList = {
      roomNumber: '4',
      roomType: 'student suite',
      amenities: 'Wifi, Streaming Apps',
      price: 30,
      checkinTime: new Date('06-Jun-2023'),
      checkoutTime: new Date('06-Jun-2023'),
      rating: 3.2,
    };

    // this.roomList.push(room);
    // this.roomList = [...this.roomList, room];

    this.roomsService.addRoomList(room).subscribe((data) => {
      this.roomList = data;
    });
  }

  editRoom() {
    const room: RoomsList = {
      roomNumber: '3',
      roomType: 'edited suite',
      amenities: 'none',
      price: 10,
      checkinTime: new Date('06-Jun-2023'),
      checkoutTime: new Date('06-Jun-2023'),
      rating: 3.2,
    };

    this.roomsService.editRoomList(room).subscribe((data) => {
      this.roomList = data;
    });
  }

  deleteRoom() {
    this.roomsService.deleteRoomList('3').subscribe((data) => {
      this.roomList = data;
    });
  }

  ngAfterViewInit(): void {
    this.headerComponent.title = 'Welcome to SANGUXXI Hotel';
    console.log(this.headerChildrenComponent);
    this.headerChildrenComponent.last.title = 'último jeje';
    console.log(this.headerChildrenComponent.length);
  }

  ngOnDestroy(): void {
    console.log('OnDestroy was called');
    if (this.subscription) {
      this.subscription.unsubscribe;
    }
  }
}
