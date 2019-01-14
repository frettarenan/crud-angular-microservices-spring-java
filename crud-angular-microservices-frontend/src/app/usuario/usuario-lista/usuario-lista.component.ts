import { Title } from '@angular/platform-browser';
import { Component, OnInit, ViewChild } from '@angular/core';

import { LazyLoadEvent, ConfirmationService } from 'primeng/components/common/api';
import { ToastyService } from 'ng2-toasty';

import { ErrorHandlerService } from '../../core/error-handler.service';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-usuario-lista',
  templateUrl: './usuario-lista.component.html',
  styleUrls: ['./usuario-lista.component.css']
})
export class UsuarioListaComponent implements OnInit {

  usuarios = [];
  @ViewChild('tabela') grid;

  constructor(
    private usuarioService: UsuarioService,
    private errorHandler: ErrorHandlerService,
    private toasty: ToastyService,
    private confirmation: ConfirmationService,
    private title: Title
  ) { }

  ngOnInit() {
    this.title.setTitle('Lista de usuários');
    this.listar();
  }

  listar() {
    this.usuarioService.listar()
      .then(resultado => {
        this.usuarios = resultado;
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  confirmarExclusao(usuario: any) {
    this.confirmation.confirm({
      message: 'Tem certeza que deseja excluir o usuário?<br/>ID: '+usuario.id+'<br/>Nome: '+usuario.nome,
      accept: () => {
        this.excluir(usuario);
      }
    });
  }

  excluir(usuario: any) {
    this.usuarioService.excluir(usuario.id)
      .then(() => {
        this.listar();
        this.toasty.success('Usuário excluído com sucesso!');
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

}
