import { CanDeactivateFn } from '@angular/router';
import { BookingComponent } from '../booking.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { inject } from '@angular/core';

export const bookingGuard: CanDeactivateFn<BookingComponent> = (
  component,
  currentRoute,
  currentState,
  nextState
) => {
  // if (component.bookingForm.pristine) {
  //   return true;
  // } else {
  //   inject(MatSnackBar).open('You have unsaved changes', 'DISCARD');
  //   return false;
  // }

  // if (component.bookingForm.pristine) {
  //   return component.bookingForm.pristine;
  // } else {
  //   confirm('You have unsaved changes.');
  //   return false;
  // }

  if (component.bookingForm.pristine) {
    return component.bookingForm.pristine;
  } else {
    inject(MatSnackBar).open('You have unsaved changes', 'DISCARD');
    return false;
  }

  return component.bookingForm.dirty;
};
