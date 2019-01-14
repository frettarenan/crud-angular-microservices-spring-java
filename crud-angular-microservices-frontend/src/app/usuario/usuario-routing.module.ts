import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { UsuarioCadastroComponent } from './usuario-cadastro/usuario-cadastro.component';
import { UsuarioListaComponent } from './usuario-lista/usuario-lista.component';

const routes: Routes = [
  { path: 'usuarios', component: UsuarioListaComponent },
  { path: 'usuarios/novo', component: UsuarioCadastroComponent },
  { path: 'usuarios/:id', component: UsuarioCadastroComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
