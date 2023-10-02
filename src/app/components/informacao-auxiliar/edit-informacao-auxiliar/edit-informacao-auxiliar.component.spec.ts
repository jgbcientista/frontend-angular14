import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditInformacaoAuxiliarComponent } from './edit-informacao-auxiliar.component';

describe('EditInformacaoAuxiliarComponent', () => {
  let component: EditInformacaoAuxiliarComponent;
  let fixture: ComponentFixture<EditInformacaoAuxiliarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditInformacaoAuxiliarComponent]
    });
    fixture = TestBed.createComponent(EditInformacaoAuxiliarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
