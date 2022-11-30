import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListExperimentsComponent } from './list-experiments.component';

describe('ListExperimentsComponent', () => {
  let component: ListExperimentsComponent;
  let fixture: ComponentFixture<ListExperimentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListExperimentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListExperimentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
