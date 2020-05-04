import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionhijasPage } from './informacionhijas.page';

describe('InformacionhijasPage', () => {
  let component: InformacionhijasPage;
  let fixture: ComponentFixture<InformacionhijasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformacionhijasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacionhijasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
