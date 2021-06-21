import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MlHomeComponent } from './ml-home.component';

describe('MlHomeComponent', () => {
  let component: MlHomeComponent;
  let fixture: ComponentFixture<MlHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MlHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MlHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
