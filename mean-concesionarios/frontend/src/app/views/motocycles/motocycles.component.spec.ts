import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotocyclesComponent } from './motocycles.component';

describe('MotocyclesComponent', () => {
  let component: MotocyclesComponent;
  let fixture: ComponentFixture<MotocyclesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotocyclesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotocyclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
