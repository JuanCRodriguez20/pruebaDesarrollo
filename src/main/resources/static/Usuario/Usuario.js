function traerDatosUsuarios() {
    $.ajax({
        url: "http://localhost:8080/api/usuario/all",
        type: "GET",
        dataType: "json",
        success: function (respuesta) {
            pintarDatosUsuario(respuesta);
        },
        error: function (xhr, status, error) {
            alert("Error de petición!");
        }
    });
}

function traerUsuario(idUsuario) {
    $.ajax({
        url: "http://localhost:8080/api/usuario/" + idUsuario,
        type: "GET",
        success: function (respuesta) {
            // Asignar los valores obtenidos a los campos del formulario
            document.getElementById("Nombres").value = respuesta.nombres;
            document.getElementById("Apellidos").value = respuesta.apellidos;
            document.getElementById("Identificacion").value = respuesta.identificacion;
            document.getElementById("localizacion").value = respuesta.localizacion.idLocalizacion;
            document.getElementById("cargo").value = respuesta.cargo.idCargo;
        },
        error: function (xhr, status, error) {
            alert("Error de petición!");
        }
    });
}


function crearUsuario(datosUsuario) {
    $.ajax({
        url: "http://localhost:8080/api/usuario/save",
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify(datosUsuario),
        success: function (respuesta) {
            alert("Usuario registrado correctamente");
            traerDatosUsuarios(); // Actualizar la tabla después de crear un usuario
        },
        error: function (xhr, status, error) {
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
        success: function (respuesta) {
            alert("Usuario actualizado correctamente");
            traerDatosUsuarios();
        },
        error: function (xhr, status, error) {
            alert("Error al actualizar el usuario: " + error);
        }
    });
}

function eliminarUsuario(idUsuario) {
    $.ajax({
        url: "http://localhost:8080/api/usuario/" + idUsuario,
        type: "DELETE",
        success: function (respuesta) {
            alert("Usuario eliminado");
            traerDatosUsuarios(); // Actualizar la tabla después de eliminar un usuario
        },
        error: function (xhr, status, error) {
            alert("Error de petición!");
        }
    });
}

function pintarDatosUsuario(datos) {
    let html = "";
    html += "<tr>";
    html += "<th>ID</th>";
    html += "<th>Nombres</th>";
    html += "<th>Apellidos</th>";
    html += "<th>Identificación</th>";
    html += "<th>Localización</th>";
    html += "<th>Cargo</th>";
    html += "<th>Activo</th>";
    html += "<th colspan=\"2\">Acciones</th>";
    html += "</tr>";

    for (let i = 0; i < datos.length; i++) {
        html += "<tr>";
        html += "<td>" + datos[i].idUsuario + "</td>";
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
        html += "<td><button class=\"btn btn-outline-dark\" style=\"padding: 8% margin-right:10%;\" width='100%'  onclick='redirigirActualizarUsuario("+ datos[i].idUsuario +");'>Actualizar</button></td>";
        html += "<td><button class=\"btn btn-outline-dark\" style=\"padding: 8% margin-right:10%;\" width='100%' onclick='eliminarUsuario(" + datos[i].idUsuario + ");'>Eliminar</button></td>";
        html += "</tr>";
    }

    $("#tablaUsuarios").html(html);
}

function guardarUsuario() {
    var nombres = document.getElementById("Nombres").value;
    var apellidos = document.getElementById("Apellidos").value;
    var identificacion = document.getElementById("Identificacion").value;
    var localizacion = document.getElementById("localizacion").value;
    var cargo = document.getElementById("cargo").value;
    var active = document.getElementById("Activo").checked;

    var datosUsuario = {
        nombres: nombres,
        apellidos: apellidos,
        identificacion: identificacion,
        active: active,
        localizacion: {idLocalizacion: localizacion},
        cargo: {idCargo: cargo}
    };

    crearUsuario(datosUsuario);
}

function actualizarUsuarioForm(idUsuario) {
    var nombres = document.getElementById("Nombres").value;
    var apellidos = document.getElementById("Apellidos").value;
    var identificacion = document.getElementById("Identificacion").value;
    var localizacion = document.getElementById("localizacion").value;
    var cargo = document.getElementById("cargo").value;
    var active = document.getElementById("Activo").checked;

    var datosUsuario = {
        idUsuario: idUsuario,
        nombres: nombres,
        apellidos: apellidos,
        identificacion: identificacion,
        active: active,
        localizacion: {idLocalizacion: localizacion},
        cargo: {idCargo: cargo}
    };

    actualizarUsuario(datosUsuario);
}

function redirigirActualizarUsuario(idUsuario) {
    window.location.href = "ActualizarUsuario.html?id=" + idUsuario;
}