package com.example.pruebadesarrollo.Repository;

import com.example.pruebadesarrollo.Model.Cargo;
import com.example.pruebadesarrollo.Repository.Crud.CargoCrudRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public class CargoRepository {
    @Autowired
    CargoCrudRepository cargoCrudRepository;

    public List<Cargo> findAll(){
        return (List<Cargo>) cargoCrudRepository.findAll();
    }

    public Optional<Cargo> getCargo(int id){
        return cargoCrudRepository.findById(id);
    }

    public Cargo save(Cargo cargo){
        return cargoCrudRepository.save(cargo);
    }

    public void delete(Cargo cargo){
        cargoCrudRepository.delete(cargo);
    }
}
