CREATE TABLE usuario (
	id INT(10) PRIMARY KEY AUTO_INCREMENT,
	nome varchar(255) NOT NULL,
	data_cadastro TIMESTAMP NOT NULL,
	ativo SMALLINT(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8;