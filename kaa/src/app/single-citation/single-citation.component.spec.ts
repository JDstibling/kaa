import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleCitationComponent } from './single-citation.component';

describe('SingleCitationComponent', () => {
  let component: SingleCitationComponent;
  let fixture: ComponentFixture<SingleCitationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleCitationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleCitationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
