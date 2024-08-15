import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsTheoryInterviewComponent } from './js-theory-interview.component';

describe('JsTheoryInterviewComponent', () => {
  let component: JsTheoryInterviewComponent;
  let fixture: ComponentFixture<JsTheoryInterviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JsTheoryInterviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsTheoryInterviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
