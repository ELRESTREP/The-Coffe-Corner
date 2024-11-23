const form = document.getElementById('registerForm');

// Escucha el evento de envío
form.addEventListener('submit', function(event) {
  event.preventDefault();
  const formData = new FormData(form);
  const datos = Object.fromEntries(formData.entries());
  localStorage.setItem('userData',datos)

  window.location.href = "./login.html";
  
});