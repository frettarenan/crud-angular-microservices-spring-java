package br.com.renanfretta.crud;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.SecurityAutoConfiguration;

@SpringBootApplication(exclude = {SecurityAutoConfiguration.class })
public class UsuarioMicroserviceApplication {

	public static void main(String[] args) {
		SpringApplication.run(UsuarioMicroserviceApplication.class, args);
	}
	
}