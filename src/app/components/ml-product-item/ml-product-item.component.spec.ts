import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MlProductItemComponent } from './ml-product-item.component';

describe('MlProductItemComponent', () => {
  let component: MlProductItemComponent;
  let fixture: ComponentFixture<MlProductItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MlProductItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MlProductItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
