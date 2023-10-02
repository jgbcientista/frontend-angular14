import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInformacaoAuxiliarComponent } from './add-informacao-auxiliar.component';

describe('AddInformacaoAuxiliarComponent', () => {
  let component: AddInformacaoAuxiliarComponent;
  let fixture: ComponentFixture<AddInformacaoAuxiliarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddInformacaoAuxiliarComponent]
    });
    fixture = TestBed.createComponent(AddInformacaoAuxiliarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
