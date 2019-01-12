package br.com.renanfretta.crud.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.renanfretta.crud.model.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {

}