import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTemp } from './admin-temp';

describe('AdminTemp', () => {
  let component: AdminTemp;
  let fixture: ComponentFixture<AdminTemp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminTemp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminTemp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
