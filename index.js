module.exports = {
  ok,
  info,
  error,
  aviso,
  mensajeBienvenida,
};

function ok(mensaje) {
  const estilos =
    "background-color: green; color: white; font-size:30px; dispay:block; text-align: center; text-decoration: underline";
  mostrarLog(mensaje, estilos);
}

function info(mensaje) {
  const estilos =
    "background-color: #80bfff; color: white; font-size:30px; dispay:block; text-align: center; text-decoration: underline";
  mostrarLog(mensaje, estilos);
}

function error(mensaje) {
  const estilos =
    "background-color: #ff3300; color: white; font-size:30px; dispay:block; text-align: center; text-decoration: underline";
  mostrarLog(mensaje, estilos);
}

function aviso(mensaje) {
  const estilos =
    "background-color: yellow; color: white; dispay:block; text-align: center; text-decoration: underline;";
  mostrarLog(mensaje, estilos);
}

function mostrarLog(mensaje, estilos) {
  console.log("%c%s", estilos, mensaje);
}
//prueba

function mensajeBienvenida() {
  return "Hola!";
}
