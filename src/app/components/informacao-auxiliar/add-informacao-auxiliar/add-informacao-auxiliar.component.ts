import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-informacao-auxiliar',
  templateUrl: './add-informacao-auxiliar.component.html',
  styleUrls: ['./add-informacao-auxiliar.component.scss']
})
export class AddInformacaoAuxiliar implements OnInit {
  informacaoAuxiliarForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
  
  ) {
    this.informacaoAuxiliarForm = this.formBuilder.group({
      nome: [''],
      email: [''],
      login: [''],
      senha: [''],
    });
  }

  ngOnInit() {}


  onSubmit(): any {

  }
}
