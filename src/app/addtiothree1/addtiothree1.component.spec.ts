/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Addtiothree1Component } from './addtiothree1.component';

describe('Addtiothree1Component', () => {
  let component: Addtiothree1Component;
  let fixture: ComponentFixture<Addtiothree1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addtiothree1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addtiothree1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
