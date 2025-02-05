import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnaminesisFormComponent } from './anaminesis-form.component';

describe('AnaminesisFormComponent', () => {
  let component: AnaminesisFormComponent;
  let fixture: ComponentFixture<AnaminesisFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnaminesisFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnaminesisFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
