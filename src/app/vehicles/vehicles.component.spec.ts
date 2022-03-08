/*
 * File: vehicles.component.spec.ts
 * Authors: Szűcs Norbert
 * Copyright: 2022, Szűcs Norbert
 * Group: Szoft II/N
 * Date: 2022-03-05
 * Github: https://github.com/Szucs-Norbert
 * Licenc: GNU GPL
*/
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiclesComponent } from './vehicles.component';

describe('VehiclesComponent', () => {
  let component: VehiclesComponent;
  let fixture: ComponentFixture<VehiclesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehiclesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
