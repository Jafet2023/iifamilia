import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioamericaPage } from './radioamerica.page';

describe('RadioamericaPage', () => {
  let component: RadioamericaPage;
  let fixture: ComponentFixture<RadioamericaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadioamericaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioamericaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
