document
  .getElementById("registro-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Desvanecer el formulario
    const formContainer = document.getElementById("form-container");
    formContainer.style.animation = "fade-out 0.5s forwards";

    // Mostrar el mensaje de éxito después de la animación de desvanecimiento
    setTimeout(() => {
      formContainer.style.display = "none";
      const successMessage = document.getElementById("success-message");
      successMessage.style.display = "block";
    }, 500); // Esperar a que termine la animación de desvanecimiento
  });
