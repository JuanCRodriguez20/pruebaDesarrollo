package com.example.pruebadesarrollo.Controller;

import com.example.pruebadesarrollo.Model.Cargo;
import com.example.pruebadesarrollo.Service.CargoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/cargo")
public class CargoController {
    @Autowired
    private CargoService cargoService;

    @GetMapping("/all")
    public List<Cargo> getAll(){
        return cargoService.getAll();
    }

    @GetMapping("/{id}")
    public Optional<Cargo> getCargo(@PathVariable int id){
        return cargoService.getCargo(id);
    }

    @PostMapping("/save")
    @ResponseStatus(HttpStatus.CREATED)
    public Cargo save(@RequestBody Cargo cargo){
        return cargoService.save(cargo);
    }

    @PutMapping("/update")
    @ResponseStatus(HttpStatus.CREATED)
    public Cargo update(@RequestBody Cargo cargo){
        return cargoService.update(cargo);
    }

    @DeleteMapping("/{id}")  //  ->>>>> localhost..../api/Cargo/12
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public boolean delete(@PathVariable int id){
        return cargoService.delete(id);
    }
}
