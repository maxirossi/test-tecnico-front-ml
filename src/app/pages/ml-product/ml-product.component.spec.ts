import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MlProductComponent } from './ml-product.component';

describe('MlProductComponent', () => {
  let component: MlProductComponent;
  let fixture: ComponentFixture<MlProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MlProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MlProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
