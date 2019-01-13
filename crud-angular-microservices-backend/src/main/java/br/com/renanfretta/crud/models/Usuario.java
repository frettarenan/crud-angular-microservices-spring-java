package br.com.renanfretta.crud.models;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Table(name = "usuario")
@Data
public class Usuario {

	@Id
	@GeneratedValue
	private Long id;

	private String nome;
	private Date dataCadastro;
	private Boolean ativo;

}