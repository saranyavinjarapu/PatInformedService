import { TestBed } from '@angular/core/testing';
import { PatInformedService } from './patinformed.service';

describe('PatService', () => {
  let service: PatInformedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatInformedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
