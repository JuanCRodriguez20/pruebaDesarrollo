package com.example.pruebadesarrollo.Service;

import com.example.pruebadesarrollo.Model.Localizacion;
import com.example.pruebadesarrollo.Repository.LocalizacionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class LocalizacionService {
    @Autowired
    private LocalizacionRepository localizacionRepository;

    public List<Localizacion> getAll(){
        return localizacionRepository.findAll();
    }

    public Optional<Localizacion> getLocalizacion(int id){
        return localizacionRepository.getLocalizacion(id);
    }

    public Localizacion save(Localizacion localizacion){
        if(localizacion.getIdLocalizacion()==null){
            return localizacionRepository.save(localizacion);
        }else{
            Optional<Localizacion> localizacionEncontrado = getLocalizacion(localizacion.getIdLocalizacion());
            if(localizacionEncontrado.isEmpty()){
                return localizacionRepository.save(localizacion);
            }else{
                return localizacion;
            }
        }
    }
    public Localizacion update(Localizacion localizacion){
        if(localizacion.getIdLocalizacion()!=null){
            Optional<Localizacion> localizacionEncontrado = getLocalizacion(localizacion.getIdLocalizacion());
            if(localizacionEncontrado.isPresent()){
                if(localizacion.getLocalizacion()!=null){
                    localizacionEncontrado.get().setLocalizacion(localizacion.getLocalizacion());
                }
                if(localizacion.isActive()!=null){
                    localizacionEncontrado.get().setActive(localizacion.isActive());
                }
                return localizacionRepository.save(localizacionEncontrado.get());
            }
        }else{
            return localizacion;
        }
        return localizacion;
    }

    public boolean delete(int id){
        Boolean respuesta = getLocalizacion(id).map(localizacion -> {
            localizacionRepository.delete(localizacion);
            return true;
        }).orElse(false);
        return respuesta;
    }
}
