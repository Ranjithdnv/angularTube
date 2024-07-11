import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideosingleComponent } from './videosingle.component';

describe('VideosingleComponent', () => {
  let component: VideosingleComponent;
  let fixture: ComponentFixture<VideosingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideosingleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideosingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
