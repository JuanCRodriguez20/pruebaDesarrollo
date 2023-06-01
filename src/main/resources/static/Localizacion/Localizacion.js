function traerDatosLocalizacion() {
    $.ajax({
        url: "http://localhost:8080/api/localizacion/all",
        type: "GET",
        dataType: "json",
        success: function (respuesta) {
            pintarDatosLocalizacion(respuesta);
        },
        error: function (xhr, status, error) {
            alert("Error de petición!");
        }
    });
}

function traerLocalizacion(idLocalizacion) {
    $.ajax({
        url: "http://localhost:8080/api/localizacion/" + idLocalizacion,
        type: "GET",
        success: function (respuesta) {
            document.getElementById("localizacion").value = respuesta.localizacion;
        },
        error: function (xhr, status, error) {
            alert("Error de petición!");
        }
    });
}


function crearLocalizacion(datosLocalizacion) {
    $.ajax({
        url: "http://localhost:8080/api/localizacion/save",
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify(datosLocalizacion),
        success: function (respuesta) {
            alert("Localizacion registrado correctamente");
            traerDatosLocalizacion(); // Actualizar la tabla después de crear un localizacion
        },
        error: function (xhr, status, error) {
            alert("Error al crear el localizacion: " + error);
        }
    });
}

function actualizarLocalizacion(datosLocalizacion) {
    $.ajax({
        url: "http://localhost:8080/api/localizacion/update",
        type: "PUT",
        contentType: "application/json",
        data: JSON.stringify(datosLocalizacion),
        success: function (respuesta) {
            alert("Localizacion actualizado correctamente");
            traerDatosLocalizacion();
        },
        error: function (xhr, status, error) {
            alert("Error al actualizar el localizacion: " + error);
        }
    });
}

function eliminarLocalizacion(idLocalizacion) {
    $.ajax({
        url: "http://localhost:8080/api/localizacion/" + idLocalizacion,
        type: "DELETE",
        success: function (respuesta) {
            alert("Localizacion eliminado");
            traerDatosLocalizacion();
        },
        error: function (xhr, status, error) {
            alert("Error de petición!");
        }
    });
}

function pintarDatosLocalizacion(datos) {
    let html = "";
    html += "<tr>";
    html += "<th>ID</th>";
    html += "<th>Localizacion</th>";
    html += "<th>Activo</th>";
    html += "<th colspan=\"2\">Acciones</th>";
    html += "</tr>";

    for (let i = 0; i < datos.length; i++) {
        html += "<tr>";
        html += "<td>" + datos[i].idLocalizacion + "</td>";
        html += "<td>" + datos[i].localizacion + "</td>";
        html += "<td>" + (datos[i].active ? 'Si' : 'No') + "</td>";
        html += "<td><button class=\"btn btn-outline-dark\" style=\"padding: 8% margin-right:10%;\" width='100%'  onclick='redirigirActualizarLocalizacion("+ datos[i].idLocalizacion +");'>Actualizar</button></td>";
        html += "<td><button class=\"btn btn-outline-dark\" style=\"padding: 8% margin-right:10%;\" width='100%' onclick='eliminarLocalizacion(" + datos[i].idLocalizacion + ");'>Eliminar</button></td>";
        html += "</tr>";
    }

    $("#tablaLocalizacion").html(html);
}

function guardarLocalizacion() {
    var localizacion = document.getElementById("localizacion").value;
    var active = document.getElementById("Activo").checked;

    var datosLocalizacion = {
        localizacion: localizacion,
        active: active
    };

    crearLocalizacion(datosLocalizacion);
}

function actualizarLocalizacionForm(idLocalizacion) {
    var localizacion = document.getElementById("localizacion").value;
    var active = document.getElementById("Activo").checked;

    var datosLocalizacion = {
        idLocalizacion: idLocalizacion,
        localizacion: localizacion,
        active: active
    };

    actualizarLocalizacion(datosLocalizacion);
}

function redirigirActualizarLocalizacion(idLocalizacion) {
    window.location.href = "ActualizarLocalizacion.html?id=" + idLocalizacion;
}