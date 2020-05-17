import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceModelAddComponent } from './price-model-add.component';

describe('PriceModelAddComponent', () => {
  let component: PriceModelAddComponent;
  let fixture: ComponentFixture<PriceModelAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceModelAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceModelAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
