import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomsAddComponent } from './rooms-add.component';

describe('RoomsAddComponent', () => {
  let component: RoomsAddComponent;
  let fixture: ComponentFixture<RoomsAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoomsAddComponent]
    });
    fixture = TestBed.createComponent(RoomsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
