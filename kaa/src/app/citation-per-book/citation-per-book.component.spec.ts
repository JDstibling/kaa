import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitationPerBookComponent } from './citation-per-book.component';

describe('CitationPerBookComponent', () => {
  let component: CitationPerBookComponent;
  let fixture: ComponentFixture<CitationPerBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitationPerBookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CitationPerBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
