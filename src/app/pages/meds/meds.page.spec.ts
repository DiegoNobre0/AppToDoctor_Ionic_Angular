import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MedsPage } from './meds.page';

describe('MedsPage', () => {
  let component: MedsPage;
  let fixture: ComponentFixture<MedsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MedsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
