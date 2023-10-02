import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersListComponent } from './components/usuario/lista-usuario/users-list.component';
import { AddUserComponent } from './components/usuario/novo-usuario/add-user.component';
import { UserDetailComponent } from './components/usuario/detalhe-usuario/user-detail.component';
import { AddInformacaoAuxiliar } from './components/informacao-auxiliar/add-informacao-auxiliar/add-informacao-auxiliar.component';
import { ListInformacaoAuxiliar } from './components/informacao-auxiliar/list-informacao-auxiliar/list-informacao-auxiliar.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'add-user' },
  { path: 'users-list', component: UsersListComponent },
  { path: 'add-user', component: AddUserComponent },
  { path: 'edit-user/:id', component: UserDetailComponent },
  { path: 'add-informacao-auxiliar', component: AddInformacaoAuxiliar },
  { path: 'list-informacao-auxiliar', component: ListInformacaoAuxiliar },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
