document.addEventListener("DOMContentLoaded", function () {
  // Seleccionar el SVG y los elementos que van a cambiar de color
  const svgToggle = document.querySelector(".dark-l");
  const centerDiv = document.querySelector(".center");
  const navbar = document.querySelector(".navbar");

  // Variable para almacenar el estado del modo (true para modo claro, false para modo oscuro)
  let isLightMode = false;

  // Evento para cambiar los colores al hacer clic en el SVG
  svgToggle.addEventListener("click", function () {
    if (isLightMode) {
      // Cambiar de vuelta al modo oscuro
      centerDiv.style.backgroundColor = "#21262d";
      navbar.style.backgroundColor = "#007ba7";
      centerDiv.style.color = "#8b949e";

      // Cambiar el estado a modo oscuro
      isLightMode = false;
    } else {
      // Cambiar al modo claro
      centerDiv.style.backgroundColor = "#FFFFFF";
      navbar.style.backgroundColor = "#88C542";
      centerDiv.style.color = "#000000";

      // Cambiar el estado a modo claro
      isLightMode = true;
    }
  });
});
