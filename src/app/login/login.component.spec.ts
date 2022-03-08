/*
 * File: login.component.spec.ts
 * Authors: Szűcs Norbert
 * Copyright: 2022, Szűcs Norbert
 * Group: Szoft II/N
 * Date: 2022-03-05
 * Github: https://github.com/Szucs-Norbert
 * Licenc: GNU GPL
*/
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
