package com.example.pruebadesarrollo.Repository;

import com.example.pruebadesarrollo.Model.Localizacion;
import com.example.pruebadesarrollo.Repository.Crud.LocalizacionCrudRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public class LocalizacionRepository {
    @Autowired
    LocalizacionCrudRepository localizacionCrudRepository;

    public List<Localizacion> findAll(){
        return (List<Localizacion>) localizacionCrudRepository.findAll();
    }

    public Optional<Localizacion> getLocalizacion(int id){
        return localizacionCrudRepository.findById(id);
    }

    public Localizacion save(Localizacion localizacion){
        return localizacionCrudRepository.save(localizacion);
    }

    public void delete(Localizacion localizacion){
        localizacionCrudRepository.delete(localizacion);
    }
}
