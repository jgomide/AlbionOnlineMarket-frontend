/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ItemMenuService } from './item-menu.service';

describe('Service: DbMock', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ItemMenuService]
    });
  });

  it('should ...', inject([ItemMenuService], (service: ItemMenuService) => {
    expect(service).toBeTruthy();
  }));
});
