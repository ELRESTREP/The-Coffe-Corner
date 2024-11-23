const form = document.getElementById('registerForm');

// Escucha el evento de envío
form.addEventListener('submit', function(event) {
  event.preventDefault(); 

  const formData = new FormData(form);


  localStorage.setItem('name', formData.get('name'));
  localStorage.setItem('lastName', formData.get('lastName'));
  localStorage.setItem('gender', formData.get('gender'));
  localStorage.setItem('email', formData.get('email'));
  localStorage.setItem('password', formData.get('password'));


  window.location.href = "./login.html";
});






