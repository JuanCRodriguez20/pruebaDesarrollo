package com.example.pruebadesarrollo.Service;

import com.example.pruebadesarrollo.Model.Cargo;
import com.example.pruebadesarrollo.Repository.CargoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CargoService {
    @Autowired
    private CargoRepository cargoRepository;

    public List<Cargo> getAll(){
        return cargoRepository.findAll();
    }

    public Optional<Cargo> getCargo(int id){
        return cargoRepository.getCargo(id);
    }

    public Cargo save(Cargo cargo){
        if(cargo.getIdCargo()==null){
            return cargoRepository.save(cargo);
        }else{
            Optional<Cargo> cargoEncontrado = getCargo(cargo.getIdCargo());
            if(cargoEncontrado.isEmpty()){
                return cargoRepository.save(cargo);
            }else{
                return cargo;
            }
        }
    }
    public Cargo update(Cargo cargo){
        if(cargo.getIdCargo()!=null){
            Optional<Cargo> cargoEncontrado = getCargo(cargo.getIdCargo());
            if(cargoEncontrado.isPresent()){
                if(cargo.getCargo()!=null){
                    cargoEncontrado.get().setCargo(cargo.getCargo());
                }
                if(cargo.isActive()!=null){
                    cargoEncontrado.get().setActive(cargo.isActive());
                }
                return cargoRepository.save(cargoEncontrado.get());
            }
        }else{
            return cargo;
        }
        return cargo;
    }

    public boolean delete(int id){
        Boolean respuesta = getCargo(id).map(cargo -> {
            cargoRepository.delete(cargo);
            return true;
        }).orElse(false);
        return respuesta;
    }
}
