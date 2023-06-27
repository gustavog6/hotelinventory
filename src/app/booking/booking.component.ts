import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../services/config.service';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { BookingService } from './booking.service';
import { mergeMap } from 'rxjs';
import { CustomValidator } from './validators/custom-validator';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'hinv-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent implements OnInit {
  bookingForm!: FormGroup;

  get guests() {
    return this.bookingForm.get('guests') as FormArray;
  }

  constructor(
    private configService: ConfigService,
    private fb: FormBuilder,
    private bookingService: BookingService,
    private route:  ActivatedRoute,
  ) {}

  ngOnInit(): void {
    const roomId = this.route.snapshot.paramMap.get('roomid');
    this.bookingForm = this.fb.group(
      {
        roomId: new FormControl(
          { value: roomId, disabled: true },
          { validators: Validators.required }
        ),
        guestName: [
          '',
          {
            updateOn: 'blur',
            validators: [
              Validators.required,
              Validators.minLength(5),
              CustomValidator.ValidateName,
              CustomValidator.ValidateSpecialChar('*'),
            ],
          },
        ],
        guestEmail: ['', [Validators.required, Validators.email]],
        mobileNumber: ['', { updateOn: 'blur' }],
        bookingAmount: [''],
        checkinDate: [''],
        checkoutDate: [''],
        bookingDate: [''],
        address: this.fb.group({
          addressLine1: ['', { validators: Validators.required }],
          addressLine2: [''],
          city: ['', { validators: Validators.required }],
          state: ['', { validators: Validators.required }],
          country: ['', { validators: Validators.required }],
          zipCode: ['', { validators: Validators.required }],
        }),
        bookingStatus: [''],
        guestCount: [''],
        guests: this.fb.array([this.addGuestControl()]),
        tnc: new FormControl(false, { validators: Validators.requiredTrue }),
      },
      {
        updateOn: 'blur',
        validators: CustomValidator.ValidateDate,
      }
    );

    this.getBookingData();

    // this.bookingForm.valueChanges.subscribe((data) => {
    //   this.bookingService.bookRoom(data).subscribe((data) => {});
    // });

    this.bookingForm.valueChanges
      .pipe(mergeMap((data) => this.bookingService.bookRoom(data)))
      .subscribe((data) => console.log(data));
  }

  addBooking() {
    console.log(this.bookingForm.getRawValue());
    // this.bookingService
    //   .bookRoom(this.bookingForm.getRawValue())
    //   .subscribe((data) => console.log(data));

    this.bookingForm.reset({
      roomId: '',
      guestName: '',
      guestEmail: '',
      mobileNumber: '',
      bookingAmount: '',
      checkinDate: '',
      checkoutDate: '',
      bookingDate: '',
      address: {
        addressLine1: '',
        addressLine2: '',
        city: '',
        state: '',
        country: '',
        zipCode: '',
      },
      bookingStatus: '',
      guestCount: '',
      guests: [],
      tnc: false,
    });
  }

  getBookingData() {
    this.bookingForm.patchValue({
      // roomId: '',
      guestName: '',
      guestEmail: 'gustavoadolfogg@gmail.com',
      mobileNumber: '',
      bookingAmount: '',
      checkinDate: '',
      checkoutDate: '',
      bookingDate: '',
      address: {
        addressLine1: '',
        addressLine2: '',
        city: '',
        state: '',
        country: '',
        zipCode: '',
      },
      bookingStatus: '',
      guestCount: '',
      guests: [],
      tnc: false,
    });
  }

  addGuestControl() {
    return this.fb.group({
      guestName: ['', { validators: Validators.required }],
      age: new FormControl(''),
    });
  }

  addGuest() {
    this.guests.push(this.addGuestControl());
  }

  addPasport() {
    this.bookingForm.addControl('passport', new FormControl(''));
  }

  deletePasport() {
    if (this.bookingForm.get('passport')) {
      this.bookingForm.removeControl('passport');
    }
  }

  deleteGuest(i: number) {
    if (this.guests.get(i.toString())) {
      this.guests.removeAt(i);
    }
  }
}
