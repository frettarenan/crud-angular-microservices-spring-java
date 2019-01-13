package br.com.renanfretta.crud.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.renanfretta.crud.models.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {

}