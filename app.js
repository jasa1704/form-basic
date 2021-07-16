function validarFormulario() {
  let verificar = true;
  let expRegPais = /^[a-záéíóúñ\s]*$/i;
  let expRegEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
  let formulario = document.getElementById("formulario");
  let nombres = document.getElementById("name");
  let direccion = document.getElementById("address");
  let pais = document.getElementById("country");
  let email = document.getElementById("email");
  if (!nombres.value) {
    alert("Escriba sus nombres por favor.");
    nombres.focus();
    verificar = false;
    return false;
  } else if (nombres.value.split(" ").length < 2) {
    alert("Esciba sus nombres completos por favor.");
    nombres.focus();
    verificar = false;
    return false;
  } else if (!direccion.value) {
    alert("Escriba su direcci\u00F3n por favor.");
    direccion.focus();
    verificar = false;
    return false;
  } else if (!pais.value) {
    alert("Escriba el nombre del pa\u00EDs que nos visita por favor.");
    pais.focus();
    verificar = false;
    return false;
  } else if (!expRegPais.exec(pais.value)) {
    alert(
      "Escriba de que pa\u00EDs nos visita sin n\u00FAmeros ni caracteres especiales como [+ * , . - _ { } ...]."
    );
    pais.focus();
    verificar = false;
    return false;
  } else if (!email.value) {
    alert("Escriba su email por favor.");
    email.focus();
    verificar = false;
    return false;
  } else if (!expRegEmail.exec(email.value)) {
    alert("Escriba un email valido por favor.");
    email.focus();
    verificar = false;
    return false;
  }

  if (verificar == true) {
    document.formulario.submit();
  }
}

function limpiarFormulario() {
  document.getElementById("form").reset();
}

window.onload = function () {
  let botonLimpiar = document.getElementById("clear");
  botonLimpiar.onclick = limpiarFormulario;
  let botonEnviar = document.getElementById("save");
  botonEnviar.onclick = validarFormulario;
};
