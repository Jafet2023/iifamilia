import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinisteriosPage } from './ministerios.page';

describe('MinisteriosPage', () => {
  let component: MinisteriosPage;
  let fixture: ComponentFixture<MinisteriosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinisteriosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinisteriosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
