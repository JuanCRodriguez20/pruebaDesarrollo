function cerrarSesion() {
    var logoutUrl = 'http://localhost:8080/logout';

    $.post(logoutUrl, function() {
        $("#user").html('');
        $(".unauthenticated").show();
        $(".authenticated").hide();
        window.location.href = "/";
    });
}
