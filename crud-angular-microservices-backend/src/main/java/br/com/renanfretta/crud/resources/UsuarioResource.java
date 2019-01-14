package br.com.renanfretta.crud.resources;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import br.com.renanfretta.crud.models.Usuario;
import br.com.renanfretta.crud.repositories.UsuarioRepository;

@RestController
@RequestMapping("/usuarios")
public class UsuarioResource {

	@Autowired
	private UsuarioRepository usuarioRepository;

	@GetMapping("/{id}")
	public ResponseEntity<Usuario> buscarPeloCodigo(@PathVariable Long id) {
		Optional<Usuario> usuario = usuarioRepository.findById(id);
		return usuario.isPresent() ? ResponseEntity.ok(usuario.get()) : ResponseEntity.notFound().build();
	}
	
	@GetMapping
	public List<Usuario> listar() {
		return usuarioRepository.findAll();
	}

	@PostMapping
	public ResponseEntity<Usuario> cadastrar(@Valid @RequestBody Usuario usuario, HttpServletResponse response) {
		usuario.setDataCadastro(new Date());
		Usuario usuarioSalvo = usuarioRepository.save(usuario);
		return ResponseEntity.status(HttpStatus.CREATED).body(usuarioSalvo);
	}

	@DeleteMapping("/{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void remover(@PathVariable Long id) {
		usuarioRepository.deleteById(id);
	}

	@PutMapping
	public ResponseEntity<Usuario> atualizar(@Valid @RequestBody Usuario usuario) {
		try {
			Usuario usuarioSalvo = usuarioRepository.save(usuario);
			return ResponseEntity.ok(usuarioSalvo);
		} catch (IllegalArgumentException e) {
			return ResponseEntity.notFound().build();
		}
	}

}