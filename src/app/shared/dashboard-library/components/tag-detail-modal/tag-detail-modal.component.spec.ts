import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagDetailModalComponent } from './tag-detail-modal.component';

describe('TagDetailModalComponent', () => {
  let component: TagDetailModalComponent;
  let fixture: ComponentFixture<TagDetailModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TagDetailModalComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TagDetailModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
