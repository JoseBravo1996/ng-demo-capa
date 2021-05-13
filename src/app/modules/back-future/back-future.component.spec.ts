import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackFutureComponent } from './back-future.component';

describe('BackFutureComponent', () => {
  let component: BackFutureComponent;
  let fixture: ComponentFixture<BackFutureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackFutureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackFutureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
