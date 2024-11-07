import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QstudentsComponent } from './qstudents.component';

describe('QstudentsComponent', () => {
  let component: QstudentsComponent;
  let fixture: ComponentFixture<QstudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QstudentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QstudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
