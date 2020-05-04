import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GruposcafePage } from './gruposcafe.page';

describe('GruposcafePage', () => {
  let component: GruposcafePage;
  let fixture: ComponentFixture<GruposcafePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GruposcafePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GruposcafePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
