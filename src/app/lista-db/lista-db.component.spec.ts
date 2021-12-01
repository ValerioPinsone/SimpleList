import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDbComponent } from './lista-db.component';

describe('ListaDbComponent', () => {
  let component: ListaDbComponent;
  let fixture: ComponentFixture<ListaDbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaDbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaDbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
