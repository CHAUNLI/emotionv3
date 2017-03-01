/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AddtionfourComponent } from './addtionfour.component';

describe('AddtionfourComponent', () => {
  let component: AddtionfourComponent;
  let fixture: ComponentFixture<AddtionfourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddtionfourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtionfourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
