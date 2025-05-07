function leer() {
    var nom = document.forms["formulario"].elements[0].value;
    var correo = document.getElementById("correo").value;
    var fecha = document.getElementById("fecha").value;
    var calificacion = document.getElementsByTagName("select")[0].value;
    var comentario = document.getElementById("comentario").value;

    var checkboxes = document.getElementsByName("check");
    var aceptado = false;
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            aceptado = true;
            break;
        }
    }

    document.getElementById("resultado").innerHTML =
        "<strong>Tu nombre:</strong> " + nom +
        "<br><strong>Tu correo:</strong> " + correo +
        "<br><strong>Fecha de visita:</strong> " + fecha +
        "<br><strong>Calificación:</strong> " + calificacion +
        "<br><strong>Comentario:</strong> " + comentario +
        "<br><strong>Aceptaste términos:</strong> " + (aceptado ? "Sí" : "No");

    const nuevaResena = {
        nombre: nom,
        correo: correo,
        fecha: fecha,
        calificacion: calificacion,
        comentario: comentario
    };

    let resenas = JSON.parse(localStorage.getItem("resenas")) || [];
    resenas.push(nuevaResena);
    localStorage.setItem("resenas", JSON.stringify(resenas));

    mostrarTodasResenas();
}

function mostrarTodasResenas() {
    let resenas = JSON.parse(localStorage.getItem("resenas")) || [];
    let contenido = "";

    resenas.forEach(function(resena) {
        contenido += `
            <div class="resena">
                <strong>${resena.nombre}</strong> (${resena.fecha})<br>
                ✉️ ${resena.correo}<br>
                ⭐ ${resena.calificacion} / 5<br>
                💬 ${resena.comentario}
                <hr>
            </div>
        `;
    });

    document.getElementById("todasResenas").innerHTML = contenido;
}

window.onload = mostrarTodasResenas;
