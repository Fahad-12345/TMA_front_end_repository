import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFlowComponent } from './add-flow.component';

describe('AddFlowComponent', () => {
  let component: AddFlowComponent;
  let fixture: ComponentFixture<AddFlowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddFlowComponent]
    });
    fixture = TestBed.createComponent(AddFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
