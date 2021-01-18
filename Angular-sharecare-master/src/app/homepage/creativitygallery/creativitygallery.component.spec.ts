import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreativitygalleryComponent } from './creativitygallery.component';

describe('CreativitygalleryComponent', () => {
  let component: CreativitygalleryComponent;
  let fixture: ComponentFixture<CreativitygalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreativitygalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreativitygalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
