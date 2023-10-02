import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from 'src/app/service/Usuario.service';

@Component({
  selector: 'app-edit-informacao-auxiliar',
  templateUrl: './edit-informacao-auxiliar.component.html',
  styleUrls: ['./edit-informacao-auxiliar.component.scss']
})
export class EditInformacaoAuxiliar implements OnInit {
  getId: any;
  updateForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private activatedRoute: ActivatedRoute,
    private usuarioService: UsuarioService
  ) {
    this.getId = this.activatedRoute.snapshot.paramMap.get('id');

    this.usuarioService.obterUsuarioPorId(this.getId).subscribe((res: { [x: string]: any; }) => {
      this.updateForm.setValue({
        nome: res['nome'],
        email: res['email'],
        login: res['login'],
        senha: res['senha'],
      });
    });

    this.updateForm = this.formBuilder.group({
      nome: [''],
      email: [''],
      login: [''],
      senha: [''],
    });
  }

  ngOnInit() {}

  onUpdate(): any {
    this.usuarioService.atualizarUsuario(this.getId, this.updateForm.value).subscribe(
      () => {
        console.log('Dados atualizado com sucesso!');
        this.ngZone.run(() => this.router.navigateByUrl('/users-list'));
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
