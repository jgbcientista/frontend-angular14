import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/service/Usuario.service';

@Component({
  selector: 'app-list-informacao-auxiliar',
  templateUrl: './list-informacao-auxiliar.component.html',
  styleUrls: ['./list-informacao-auxiliar.component.scss']
})
export class ListInformacaoAuxiliar  implements OnInit {
  Users: any = [];

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.usuarioService.obterTodos().subscribe((res: any) => {
      console.log(res);
      this.Users = res;
    });
  }

  delete(id: any, i: any) {
    console.log(id);
    if (window.confirm('Tem certeza que deseja remover?')) {
      this.usuarioService.removerUsuario(id).subscribe(() => {
        this.Users.splice(i, 1);
      });
    }
  }
}
