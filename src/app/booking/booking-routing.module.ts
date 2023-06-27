import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './booking.component';
import { bookingGuard } from './guards/booking.guard';

const routes: Routes = [
  {
    path: '',
    component: BookingComponent,
    canDeactivate: [bookingGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookingRoutingModule {}
