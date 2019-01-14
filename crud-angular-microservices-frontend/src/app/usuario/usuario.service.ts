import { Http, Headers, URLSearchParams } from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';

import { Usuario } from '../core/model';

@Injectable()
export class UsuarioService {

  usuarioUrl = 'http://localhost:8080/usuarios';

  constructor(private http: Http) { }

  listar(): Promise<any> {
    const headers = new Headers();
    const params = new URLSearchParams();

    return this.http.get(this.usuarioUrl,
        { headers, search: params })
      .toPromise()
      .then(response => {
        return response.json();
      });
  }

  excluir(id: number): Promise<void> {
    const headers = new Headers();
    const params = new URLSearchParams();

    return this.http.delete(this.usuarioUrl + '/' + id, { headers, search: params })
      .toPromise()
      .then(() => null);
  }

  buscarPorCodigo(id: number): Promise<Usuario> {
    const headers = new Headers();
    const params = new URLSearchParams();

    return this.http.get(this.usuarioUrl + '/' + id, { headers, search: params })
      .toPromise()
      .then(response => {
        const usuario = response.json() as Usuario;
        return usuario;
      });
  }

  adicionar(usuario: Usuario): Promise<Usuario> {
    const headers = new Headers();
    const params = new URLSearchParams();

    headers.set('Content-Type', 'application/json; charset=utf-8');

    return this.http.post(this.usuarioUrl, JSON.stringify(usuario), { headers, search: params })
      .toPromise()
      .then(response => response.json());
  }

  atualizar(usuario: Usuario): Promise<Usuario> {
    const headers = new Headers();
    const params = new URLSearchParams();

    headers.set('Content-Type', 'application/json; charset=utf-8');

    return this.http.put(this.usuarioUrl, JSON.stringify(usuario), { headers, search: params })
      .toPromise()
      .then(response => {
        const usuarioAlterado = response.json() as Usuario;
        return usuarioAlterado;
      });
  }

}