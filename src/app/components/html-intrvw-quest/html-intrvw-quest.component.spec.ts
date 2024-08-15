import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlIntrvwQuestComponent } from './html-intrvw-quest.component';

describe('HtmlIntrvwQuestComponent', () => {
  let component: HtmlIntrvwQuestComponent;
  let fixture: ComponentFixture<HtmlIntrvwQuestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HtmlIntrvwQuestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HtmlIntrvwQuestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
