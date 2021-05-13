import { TestBed } from '@angular/core/testing';

import { OfiTelegrafoService } from './ofi-telegrafo.service';

describe('OfiTelegrafoService', () => {
  let service: OfiTelegrafoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OfiTelegrafoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
