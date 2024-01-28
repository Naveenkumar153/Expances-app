import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FortgetPasswordComponent } from './fortget-password.component';

describe('FortgetPasswordComponent', () => {
  let component: FortgetPasswordComponent;
  let fixture: ComponentFixture<FortgetPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FortgetPasswordComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FortgetPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
