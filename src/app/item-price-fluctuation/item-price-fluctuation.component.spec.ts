import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemPriceFluctuationComponent } from './item-price-fluctuation.component';

describe('ItemPriceFluctuationComponent', () => {
  let component: ItemPriceFluctuationComponent;
  let fixture: ComponentFixture<ItemPriceFluctuationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemPriceFluctuationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemPriceFluctuationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
