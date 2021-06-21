import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MlResultsItemComponent } from './ml-results-item.component';

describe('MlResultsItemComponent', () => {
  let component: MlResultsItemComponent;
  let fixture: ComponentFixture<MlResultsItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MlResultsItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MlResultsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
