package com.example.pruebadesarrollo.Repository;

import com.example.pruebadesarrollo.Model.Usuario;
import com.example.pruebadesarrollo.Repository.Crud.UsuarioCrudRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public class UsuarioRepository {
    @Autowired
    private UsuarioCrudRepository usuarioCrudRepository;

    public List<Usuario> findAll(){
        return (List<Usuario>) usuarioCrudRepository.findAll();
    }

    public Optional<Usuario> getUsuario(int id){
        return usuarioCrudRepository.findById(id);
    }

    public Usuario save(Usuario usuario){
        return usuarioCrudRepository.save(usuario);
    }

    public void delete(Usuario usuario){
        usuarioCrudRepository.delete(usuario);
    }
}
