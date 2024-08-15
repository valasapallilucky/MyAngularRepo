import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssIntrvwQuestComponent } from './css-intrvw-quest.component';

describe('CssIntrvwQuestComponent', () => {
  let component: CssIntrvwQuestComponent;
  let fixture: ComponentFixture<CssIntrvwQuestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CssIntrvwQuestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CssIntrvwQuestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
