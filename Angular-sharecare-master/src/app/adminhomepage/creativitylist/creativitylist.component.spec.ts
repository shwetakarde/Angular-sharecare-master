import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreativitylistComponent } from './creativitylist.component';

describe('CreativitylistComponent', () => {
  let component: CreativitylistComponent;
  let fixture: ComponentFixture<CreativitylistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreativitylistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreativitylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
