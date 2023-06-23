import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulariodosComponent } from './formulariodos.component';

describe('FormulariodosComponent', () => {
  let component: FormulariodosComponent;
  let fixture: ComponentFixture<FormulariodosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormulariodosComponent]
    });
    fixture = TestBed.createComponent(FormulariodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
