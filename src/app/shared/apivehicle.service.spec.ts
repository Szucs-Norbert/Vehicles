/*
 * File: apivehicle.service.spec.ts
 * Authors: Szűcs Norbert
 * Copyright: 2022, Szűcs Norbert
 * Group: Szoft II/N
 * Date: 2022-03-05
 * Github: https://github.com/Szucs-Norbert
 * Licenc: GNU GPL
*/
import { TestBed } from '@angular/core/testing';

import { ApivehicleService } from './apivehicle.service';

describe('ApivehicleService', () => {
  let service: ApivehicleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApivehicleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
