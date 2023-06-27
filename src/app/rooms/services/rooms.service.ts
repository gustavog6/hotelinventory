import { Inject, Injectable, inject } from '@angular/core';
import { Room, RoomsList } from '../rooms';
import { APP_SERVICE_CONFIG } from '../../AppConfig/appconfig.service';
import { AppConfig } from '../../AppConfig/appconfig.interface';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RoomsService {
  roomList: Array<RoomsList> = [
    // {
    //   roomNumber: 1,
    //   roomType: 'normal suite',
    //   amenities: 'Wifi, TV, Streaming Apps',
    //   price: 45,
    //   checkinTime: new Date('06-Jun-2023'),
    //   checkoutTime: new Date('06-Jun-2023'),
    //   rating: 3.4,
    // },
    // {
    //   roomNumber: 2,
    //   roomType: 'premium suite',
    //   amenities: 'Wifi, TV, Streaming Apps and free drinks',
    //   price: 80,
    //   checkinTime: new Date('06-Jun-2023'),
    //   checkoutTime: new Date('06-Jun-2023'),
    //   rating: 4.2,
    // },
    // {
    //   roomNumber: 3,
    //   roomType: 'president suite',
    //   amenities: 'Wifi, TV, Streaming Apps, free drinks and free taxi',
    //   price: 160,
    //   checkinTime: new Date('06-Jun-2023'),
    //   checkoutTime: new Date('06-Jun-2023'),
    //   rating: 4.7,
    // },
  ];

  constructor(
    @Inject(APP_SERVICE_CONFIG) private config: AppConfig,
    private http: HttpClient
  ) {
    console.log(config.apiEndpoint);

    console.log('RoomsService is runnig');
  }

  // headers = new HttpHeaders({ token: 'SANGUXXI' });

  getRoomList$ = this.http
    .get<Array<RoomsList>>('/api/rooms')
    .pipe(shareReplay(1));

  getRoomList() {
    // return this.roomList;
    return this.http.get<Array<RoomsList>>('/api/rooms');
  }

  addRoomList(room: RoomsList) {
    return this.http.post<Array<RoomsList>>('/api/rooms', room);
  }

  editRoomList(room: RoomsList) {
    return this.http.put<Array<RoomsList>>(
      `/api/rooms/${room.roomNumber}`,
      room
    );
  }

  deleteRoomList(id: string) {
    return this.http.delete<Array<RoomsList>>(`/api/rooms/${id}`);
  }

  getPhotos() {
    const request = new HttpRequest(
      'GET',
      'https://jsonplaceholder.typicode.com/photos',
      { reportProgress: true }
    );
    return this.http.request(request);
  }
}
