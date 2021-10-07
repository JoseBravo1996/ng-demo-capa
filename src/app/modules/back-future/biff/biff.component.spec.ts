import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiffComponent } from './biff.component';

describe('BiffComponent', () => {
  let component: BiffComponent;
  let fixture: ComponentFixture<BiffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiffComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BiffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
