import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthenticatedPageContainerComponent } from './authenticated-page-container.component';

describe('AuthenticatedPageContainerComponent', () => {
  let component: AuthenticatedPageContainerComponent;
  let fixture: ComponentFixture<AuthenticatedPageContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuthenticatedPageContainerComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthenticatedPageContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
