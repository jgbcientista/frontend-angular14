import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HstInformacaoAuxiliarComponent } from './hst-informacao-auxiliar.component';

describe('HstInformacaoAuxiliarComponent', () => {
  let component: HstInformacaoAuxiliarComponent;
  let fixture: ComponentFixture<HstInformacaoAuxiliarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HstInformacaoAuxiliarComponent]
    });
    fixture = TestBed.createComponent(HstInformacaoAuxiliarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
