import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceModelDetailComponent } from './price-model-detail.component';

describe('PriceModelDetailComponent', () => {
  let component: PriceModelDetailComponent;
  let fixture: ComponentFixture<PriceModelDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceModelDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceModelDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
