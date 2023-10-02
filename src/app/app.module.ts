import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AddUserComponent } from './components/usuario/novo-usuario/add-user.component';
import { UserDetailComponent } from './components/usuario/detalhe-usuario/user-detail.component';
import { UsersListComponent } from './components/usuario/lista-usuario/users-list.component';
import { AddInformacaoAuxiliar } from './components/informacao-auxiliar/add-informacao-auxiliar/add-informacao-auxiliar.component';
import { ListInformacaoAuxiliar } from './components/informacao-auxiliar/list-informacao-auxiliar/list-informacao-auxiliar.component';
import { EditInformacaoAuxiliar } from './components/informacao-auxiliar/edit-informacao-auxiliar/edit-informacao-auxiliar.component';
import { HstInformacaoAuxiliar } from './components/informacao-auxiliar/hst-informacao-auxiliar/hst-informacao-auxiliar.component';



@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    UserDetailComponent,
    UsersListComponent,
    AddInformacaoAuxiliar,
    ListInformacaoAuxiliar,
    EditInformacaoAuxiliar,
    HstInformacaoAuxiliar,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
