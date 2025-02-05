import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnaminesisViewComponent } from './anaminesis-view.component';

describe('AnaminesisViewComponent', () => {
  let component: AnaminesisViewComponent;
  let fixture: ComponentFixture<AnaminesisViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnaminesisViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnaminesisViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
