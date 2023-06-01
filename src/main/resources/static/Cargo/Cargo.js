function traerDatosCargos() {
    $.ajax({
        url: "http://localhost:8080/api/cargo/all",
        type: "GET",
        dataType: "json",
        success: function (respuesta) {
            pintarDatosCargo(respuesta);
        },
        error: function (xhr, status, error) {
            alert("Error de petición!");
        }
    });
}

function traerCargo(idCargo) {
    $.ajax({
        url: "http://localhost:8080/api/cargo/" + idCargo,
        type: "GET",
        success: function (respuesta) {
            document.getElementById("cargo").value = respuesta.cargo;
        },
        error: function (xhr, status, error) {
            alert("Error de petición!");
        }
    });
}


function crearCargo(datosCargo) {
    $.ajax({
        url: "http://localhost:8080/api/cargo/save",
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify(datosCargo),
        success: function (respuesta) {
            alert("Cargo registrado correctamente");
            traerDatosCargos(); // Actualizar la tabla después de crear un cargo
        },
        error: function (xhr, status, error) {
            alert("Error al crear el cargo: " + error);
        }
    });
}

function actualizarCargo(datosCargo) {
    $.ajax({
        url: "http://localhost:8080/api/cargo/update",
        type: "PUT",
        contentType: "application/json",
        data: JSON.stringify(datosCargo),
        success: function (respuesta) {
            alert("Cargo actualizado correctamente");
            traerDatosCargos();
        },
        error: function (xhr, status, error) {
            alert("Error al actualizar el cargo: " + error);
        }
    });
}

function eliminarCargo(idCargo) {
    $.ajax({
        url: "http://localhost:8080/api/cargo/" + idCargo,
        type: "DELETE",
        success: function (respuesta) {
            alert("Cargo eliminado");
            traerDatosCargos();
        },
        error: function (xhr, status, error) {
            alert("Error de petición!");
        }
    });
}

function pintarDatosCargo(datos) {
    let html = "";
    html += "<tr>";
    html += "<th>ID</th>";
    html += "<th>Cargo</th>";
    html += "<th>Activo</th>";
    html += "<th colspan=\"2\">Acciones</th>";
    html += "</tr>";

    for (let i = 0; i < datos.length; i++) {
        html += "<tr>";
        html += "<td>" + datos[i].idCargo + "</td>";
        html += "<td>" + datos[i].cargo + "</td>";
        html += "<td>" + (datos[i].active ? 'Si' : 'No') + "</td>";
        html += "<td><button class=\"btn btn-outline-dark\" style=\"padding: 8% margin-right:10%;\" width='100%'  onclick='redirigirActualizarCargo("+ datos[i].idCargo +");'>Actualizar</button></td>";
        html += "<td><button class=\"btn btn-outline-dark\" style=\"padding: 8% margin-right:10%;\" width='100%' onclick='eliminarCargo(" + datos[i].idCargo + ");'>Eliminar</button></td>";
        html += "</tr>";
    }

    $("#tablaCargos").html(html);
}

function guardarCargo() {
    var cargo = document.getElementById("cargo").value;
    var active = document.getElementById("Activo").checked;

    var datosCargo = {
        cargo: cargo,
        active: active
    };

    crearCargo(datosCargo);
}

function actualizarCargoForm(idCargo) {
    var cargo = document.getElementById("cargo").value;
    var active = document.getElementById("Activo").checked;

    var datosCargo = {
        idCargo: idCargo,
        cargo: cargo,
        active: active
    };

    actualizarCargo(datosCargo);
}

function redirigirActualizarCargo(idCargo) {
    window.location.href = "ActualizarCargo.html?id=" + idCargo;
}