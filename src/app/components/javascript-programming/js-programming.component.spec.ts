import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JSProgrammingComponent } from './js-programming.component';

describe('JSProgrammingComponent', () => {
  let component: JSProgrammingComponent;
  let fixture: ComponentFixture<JSProgrammingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JSProgrammingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JSProgrammingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
