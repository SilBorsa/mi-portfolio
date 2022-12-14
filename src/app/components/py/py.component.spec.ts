import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PyComponent } from './py.component';

describe('PyComponent', () => {
  let component: PyComponent;
  let fixture: ComponentFixture<PyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});