package com.example.pruebadesarrollo.Controller;

import com.example.pruebadesarrollo.Model.Localizacion;
import com.example.pruebadesarrollo.Service.LocalizacionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/localizacion")
public class LocalizacionController {
    @Autowired
    private LocalizacionService localizacionService;

    @GetMapping("/all")
    public List<Localizacion> getAll(){
        return localizacionService.getAll();
    }

    @GetMapping("/{id}")
    public Optional<Localizacion> getLocalizacion(@PathVariable int id){
        return localizacionService.getLocalizacion(id);
    }

    @PostMapping("/save")
    @ResponseStatus(HttpStatus.CREATED)
    public Localizacion save(@RequestBody Localizacion localizacion){
        return localizacionService.save(localizacion);
    }

    @PutMapping("/update")
    @ResponseStatus(HttpStatus.CREATED)
    public Localizacion update(@RequestBody Localizacion localizacion){
        return localizacionService.update(localizacion);
    }

    @DeleteMapping("/{id}")  //  ->>>>> localhost..../api/Localizacion/12
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public boolean delete(@PathVariable int id){
        return localizacionService.delete(id);
    }
}
