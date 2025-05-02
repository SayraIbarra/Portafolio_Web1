function leer() {
	let nom = document.getElementById("user").value;
	let clave = document.getElementById("pass").value;
	let car = document.getElementById("carrera").value;

	let gen = document.getElementsByName("genero");
	let g = "";
	for (let i = 0; i < gen.length; i++) {
		if (gen[i].checked) {
			g = gen[i].value;
			break;
		}
	}

	let ok = document.getElementById("check").checked;

	document.getElementById("resultado").innerHTML =
		"<br>Tu nombre: " + nom +
		"<br>Tu password: " + clave +
		"<br>Tu carrera: " + car +
		"<br>Tu género: " + g +
		"<br>Estado (aceptó términos): " + (ok ? "Sí" : "No");
}
