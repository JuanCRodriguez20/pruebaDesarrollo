package com.example.pruebadesarrollo.Controller;

import com.example.pruebadesarrollo.Model.Usuario;
import com.example.pruebadesarrollo.Service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/usuario")
public class UsuarioController {
    @Autowired
    private UsuarioService usuarioService;

    @GetMapping("/all")
    public List<Usuario> getAll(){
        return usuarioService.getAll();
    }

    @GetMapping("/{id}")
    public Optional<Usuario> getUsuario(@PathVariable int id){
        return usuarioService.getUsuario(id);
    }

    @PostMapping("/save")
    @ResponseStatus(HttpStatus.CREATED)
    public Usuario save(@RequestBody Usuario usuario){
        return usuarioService.save(usuario);
    }

    @PutMapping("/update")
    @ResponseStatus(HttpStatus.CREATED)
    public Usuario update(@RequestBody Usuario usuario){
        return usuarioService.update(usuario);
    }

    @DeleteMapping("/{id}")  //  ->>>>> localhost..../api/Usuario/12
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public boolean delete(@PathVariable int id){
        return usuarioService.delete(id);
    }
}
