package com.example.pruebadesarrollo.Model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import javax.persistence.*;

import java.util.List;

@Entity
@Table(name = "localizacion")
public class Localizacion {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idLocalizacion;

    @Column(nullable = false)
    private String localizacion;

    private Boolean active;

    @OneToMany(cascade = {CascadeType.PERSIST}, mappedBy = "localizacion")
    @JsonIgnoreProperties("localizacion")
    private List<Usuario> usuario;

    public Integer getIdLocalizacion() {
        return idLocalizacion;
    }

    public void setIdLocalizacion(Integer idLocalizacion) {
        this.idLocalizacion = idLocalizacion;
    }

    public String getLocalizacion() {
        return localizacion;
    }

    public void setLocalizacion(String localizacion) {
        this.localizacion = localizacion;
    }

    public Boolean isActive() {
        return active;
    }

    public void setActive(Boolean active) {
        this.active = active;
    }

    public List<Usuario> getUsuario() {
        return usuario;
    }

    public void setUsuario(List<Usuario> usuario) {
        this.usuario = usuario;
    }
}
