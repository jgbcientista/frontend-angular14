import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListInformacaoAuxiliarComponent } from './list-informacao-auxiliar.component';

describe('ListInformacaoAuxiliarComponent', () => {
  let component: ListInformacaoAuxiliarComponent;
  let fixture: ComponentFixture<ListInformacaoAuxiliarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListInformacaoAuxiliarComponent]
    });
    fixture = TestBed.createComponent(ListInformacaoAuxiliarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
