import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'hinv-rooms-booking',
  templateUrl: './rooms-booking.component.html',
  styleUrls: ['./rooms-booking.component.scss'],
})
export class RoomsBookingComponent implements OnInit {
  id!: number;

  constructor(private router: ActivatedRoute) {}

  // id$ = this.router.params.pipe(map((data) => data['roomid']));
  id$ = this.router.paramMap.pipe(map((data) => data.get('roomid')));

  ngOnInit(): void {
    // this.id = this.router.snapshot.params['roomid'];
    // this.router.params.subscribe((params) => {
    //   this.id = params['roomid'];
    // });
    // this.router.paramMap.subscribe((params) => {
    //   params.get('roomid');
    // });
  }
}
