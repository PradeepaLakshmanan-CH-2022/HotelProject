import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerlistComponent } from './ownerlist.component';

describe('OwnerlistComponent', () => {
  let component: OwnerlistComponent;
  let fixture: ComponentFixture<OwnerlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnerlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OwnerlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
