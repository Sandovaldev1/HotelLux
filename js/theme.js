const themeToggleButton = document.getElementById('theme-toggle-button');
const body = document.body;

themeToggleButton.addEventListener('click', () => {
  // Alternar la clase 'dark-theme' en el body al hacer clic en el botón
  body.classList.toggle('dark-theme');
  updateButtonText();
});

function updateButtonText() {
  // Obtener el estado actual del tema (si tiene la clase 'dark-theme' o no)
  const isDarkTheme = body.classList.contains('dark-theme');

  // Actualizar el texto del botón basado en el estado del tema
  themeToggleButton.textContent = isDarkTheme ? 'Tema Claro' : 'Tema Oscuro';
}