import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HalllistComponent } from './halllist.component';

describe('HalllistComponent', () => {
  let component: HalllistComponent;
  let fixture: ComponentFixture<HalllistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HalllistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HalllistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
