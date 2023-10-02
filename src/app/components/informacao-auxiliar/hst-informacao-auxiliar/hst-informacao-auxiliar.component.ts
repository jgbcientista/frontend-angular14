import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/service/Usuario.service';

@Component({
  selector: 'app-hst-informacao-auxiliar',
  templateUrl: './hst-informacao-auxiliar.component.html',
  styleUrls: ['./hst-informacao-auxiliar.component.scss']
})
export class HstInformacaoAuxiliar implements OnInit {
  informacoesAuxiliar: any = [];

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.usuarioService.obterTodos().subscribe((res: any) => {
      console.log(res);
      this.informacoesAuxiliar = res;
    });
  }

  delete(id: any, i: any) {
    console.log(id);
    if (window.confirm('Tem certeza que deseja remover?')) {
      this.usuarioService.removerUsuario(id).subscribe(() => {
        this.informacoesAuxiliar.splice(i, 1);
      });
    }
  }
}
