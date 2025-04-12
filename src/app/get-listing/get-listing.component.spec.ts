import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetListingComponent } from './get-listing.component';

describe('GetListingComponent', () => {
  let component: GetListingComponent;
  let fixture: ComponentFixture<GetListingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetListingComponent]
    });
    fixture = TestBed.createComponent(GetListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
