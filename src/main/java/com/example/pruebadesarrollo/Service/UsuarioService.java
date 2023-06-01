package com.example.pruebadesarrollo.Service;

import com.example.pruebadesarrollo.Model.Usuario;
import com.example.pruebadesarrollo.Repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UsuarioService {
    @Autowired
    private UsuarioRepository usuarioRepository;

    public List<Usuario> getAll(){
        return usuarioRepository.findAll();
    }

    public Optional<Usuario> getUsuario(int id){
        return usuarioRepository.getUsuario(id);
    }

    public Usuario save(Usuario usuario){
        if(usuario.getIdUsuario()==null){
            return usuarioRepository.save(usuario);
        }else{
            Optional<Usuario> usuarioEncontrado = getUsuario(usuario.getIdUsuario());
            if(usuarioEncontrado.isEmpty()){
                return usuarioRepository.save(usuario);
            }else{
                return usuario;
            }
        }
    }
    public Usuario update(Usuario usuario){
        if(usuario.getIdUsuario()!=null){
            Optional<Usuario> usuarioEncontrado = getUsuario(usuario.getIdUsuario());
            if(usuarioEncontrado.isPresent()){
                if(usuario.getNombres()!=null){
                    usuarioEncontrado.get().setNombres(usuario.getNombres());
                }
                if(usuario.getApellidos()!=null){
                    usuarioEncontrado.get().setApellidos(usuario.getApellidos());
                }
                if(usuario.getIdentificacion()!=null){
                    usuarioEncontrado.get().setIdentificacion(usuario.getIdentificacion());
                }
                if(usuario.isActive()!=null){
                    usuarioEncontrado.get().setActive(usuario.isActive());
                }
                if(usuario.getLocalizacion()!=null){
                    usuarioEncontrado.get().setLocalizacion(usuario.getLocalizacion());
                }
                if(usuario.getCargo()!=null){
                    usuarioEncontrado.get().setCargo(usuario.getCargo());
                }
                return usuarioRepository.save(usuarioEncontrado.get());
            }
        }else{
            return usuario;
        }
        return usuario;
    }

    public boolean delete(int id){
        Boolean respuesta = getUsuario(id).map(usuario -> {
            usuarioRepository.delete(usuario);
            return true;
        }).orElse(false);
        return respuesta;
    }
}
