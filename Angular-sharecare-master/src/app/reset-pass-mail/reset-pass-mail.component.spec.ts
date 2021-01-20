import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetPassMailComponent } from './reset-pass-mail.component';

describe('ResetPassMailComponent', () => {
  let component: ResetPassMailComponent;
  let fixture: ComponentFixture<ResetPassMailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResetPassMailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetPassMailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
