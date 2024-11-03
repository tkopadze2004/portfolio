import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RgacComponent } from './rgac.component';

describe('RgacComponent', () => {
  let component: RgacComponent;
  let fixture: ComponentFixture<RgacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RgacComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RgacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
