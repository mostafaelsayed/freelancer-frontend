import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceModelsComponent } from './price-models.component';

describe('PriceModelsComponent', () => {
  let component: PriceModelsComponent;
  let fixture: ComponentFixture<PriceModelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceModelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceModelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
