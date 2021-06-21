import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MlSearchInputComponent } from './ml-search-input.component';

describe('MlSearchInputComponent', () => {
  let component: MlSearchInputComponent;
  let fixture: ComponentFixture<MlSearchInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MlSearchInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MlSearchInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
