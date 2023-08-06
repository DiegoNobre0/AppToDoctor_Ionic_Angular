import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdmPage } from './adm.page';

describe('AdmPage', () => {
  let component: AdmPage;
  let fixture: ComponentFixture<AdmPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AdmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
