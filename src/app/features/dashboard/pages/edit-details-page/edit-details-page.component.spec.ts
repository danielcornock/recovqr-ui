import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDetailsPageComponent } from './edit-details-page.component';

describe('EditDetailsPageComponent', () => {
  let component: EditDetailsPageComponent;
  let fixture: ComponentFixture<EditDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditDetailsPageComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
