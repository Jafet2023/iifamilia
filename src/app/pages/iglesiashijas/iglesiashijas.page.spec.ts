import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IglesiashijasPage } from './iglesiashijas.page';

describe('IglesiashijasPage', () => {
  let component: IglesiashijasPage;
  let fixture: ComponentFixture<IglesiashijasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IglesiashijasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IglesiashijasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
