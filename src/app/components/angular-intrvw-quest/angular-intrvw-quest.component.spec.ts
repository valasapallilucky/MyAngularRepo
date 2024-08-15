import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularIntrvwQuestComponent } from './angular-intrvw-quest.component';

describe('AngularIntrvwQuestComponent', () => {
  let component: AngularIntrvwQuestComponent;
  let fixture: ComponentFixture<AngularIntrvwQuestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AngularIntrvwQuestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularIntrvwQuestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
