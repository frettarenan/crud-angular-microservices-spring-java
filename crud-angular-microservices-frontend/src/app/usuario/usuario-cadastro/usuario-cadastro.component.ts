import { Title } from '@angular/platform-browser';
import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ToastyService } from 'ng2-toasty';

import { ErrorHandlerService } from '../../core/error-handler.service';
import { Usuario } from '../../core/model';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-usuario-cadastro',
  templateUrl: './usuario-cadastro.component.html',
  styleUrls: ['./usuario-cadastro.component.css']
})
export class UsuarioCadastroComponent implements OnInit {

  situacoes = [
    { label: 'Ativo', value: true },
    { label: 'Inativo', value: false },
  ];

  usuario = new Usuario();

  constructor(
    private usuarioService: UsuarioService,
    private toasty: ToastyService,
    private errorHandler: ErrorHandlerService,
    private route: ActivatedRoute,
    private router: Router,
    private title: Title
  ) { }

  ngOnInit() {
    const idUsuario = this.route.snapshot.params['id'];

    this.title.setTitle('Cadastro de usuário');

    if (idUsuario) {
      this.carregarUsuario(idUsuario);
    } else {
      this.usuario.ativo = true;
    }
  }

  get editando() {
    return Boolean(this.usuario.id)
  }

  carregarUsuario(id: number) {
    this.usuarioService.buscarPorCodigo(id)
      .then(usuario => {
        this.usuario = usuario;
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  salvar(form: FormControl) {
    if (this.editando) {
      this.atualizarUsuario(form);
    } else {
      this.adicionarUsuario(form);
    }
  }

  adicionarUsuario(form: FormControl) {
    this.usuario.id = null;
    this.usuario.dataCadastro = null;
    this.usuarioService.adicionar(this.usuario)
      .then(usuarioAdicionado => {
        this.toasty.success('Usuario cadastrado com sucesso!');
        this.router.navigate(['/usuarios', usuarioAdicionado.id]);
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  atualizarUsuario(form: FormControl) {
    this.usuarioService.atualizar(this.usuario)
      .then(usuario => {
        this.usuario = usuario;
        this.toasty.success('Cadastro salvo com sucesso!');
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  novo(form: FormControl) {
    form.reset();

    setTimeout(function() {
      this.usuario = new Usuario();
    }.bind(this), 1);

    this.router.navigate(['/usuarios/novo']);
  }

}