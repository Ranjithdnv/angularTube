import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideowatchComponent } from './videowatch.component';

describe('VideowatchComponent', () => {
  let component: VideowatchComponent;
  let fixture: ComponentFixture<VideowatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideowatchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideowatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
