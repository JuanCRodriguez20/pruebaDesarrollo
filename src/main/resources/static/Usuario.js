function traerDatosUsuarios(){
    $.ajax({
        url: "http://localhost:8080/api/usuario/all",
        type: "GET",
        dataType: "json",
        success: function(respuesta){
            pintarDatosUsuario(respuesta);
        },
        error: function(respuesta, xhr){
            alert("Error de peticion!");
        }
    });
}

function crearUsuario(datosUsuario) {
    $.ajax({
        url: "http://localhost:8080/api/usuario/save",
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify(datosUsuario),
        success: function(respuesta) {
            alert("Usuario Registrado correctamente");
        },
        error: function(xhr, status, error) {
            alert("Error al crear el usuario: " + error);
        }
    });
}


function actualizarUsuario(datosUsuario) {
    $.ajax({
        url: "http://localhost:8080/api/usuario/update",
        type: "PUT",
        contentType: "application/json",
        data: JSON.stringify(datosUsuario),
        success: function(respuesta) {
            alert("Usuario actualizado correctamente");
        },
        error: function(xhr, status, error) {
            alert("Error al actualizar el usuario: " + error);
        }
    });
}


function eliminarUsuario(idUsuario){
    $.ajax({
        url: "http://localhost:8080/api/usuario/"+idUsuario,
        type: "DELETE",
        success: function(respuesta){
            alert("Eliminado");
        },
        error: function(respuesta, xhr){
            alert("Error de peticion!");
        }

    });
}

function pintarDatosUsuario(datos) {
    let html = "";
    html += "<tr>";
    html += "<th>Nombres</th>";
    html += "<th>Apellidos</th>";
    html += "<th>Identificación</th>";
    html += "<th>Localización</th>"
    html += "<th>Cargo</th>"
    html += "<th>Activo</th>"
    html += "</tr>";

    for (let i = 0; i < datos.length; i++) {
        html += "<tr>";
        html += "<td>" + datos[i].nombres + "</td>";
        html += "<td>" + datos[i].apellidos + "</td>";
        html += "<td>" + datos[i].identificacion + "</td>";
        if (datos[i].localizacion) {
            html += "<td>" + datos[i].localizacion.localizacion + "</td>";
        } else {
            html += "<td>N/A</td>";
        }
        if (datos[i].cargo) {
            html += "<td>" + datos[i].cargo.cargo + "</td>";
        } else {
            html += "<td>N/A</td>";
        }

        html += "<td>" + (datos[i].active ? 'Si' : 'No') + "</td>";
        html += "<td><button class=\"btn btn-light btn-lg\" style=\"padding: 8%\" onclick='eliminarUsuario(" + datos[i].idUsuario + ");'>Eliminar</button></td>"
        html += "</tr>";
    }

    $("#tablaUsuarios").empty();
    $("#tablaUsuarios").append(html);
}


function guardarUsuario() {
    var nombres = document.getElementById("Nombres").value;
    var apellidos = document.getElementById("Apellidos").value;
    var identificacion = document.getElementById("Identificacion").value;
    var localizacion = document.getElementById("idLocalizacion").value;
    var cargo = document.getElementById("idCargo").value;
    var active = document.getElementById("Activo").checked;

    var datosUsuario = {
        nombres: nombres,
        apellidos: apellidos,
        identificacion: identificacion,
        active: active,
        idLocalizacion: localizacion,
        idCargo: cargo
    };

    crearUsuario(datosUsuario);
}