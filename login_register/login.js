const form = document.getElementById('loginForm');

// Escucha el evento de envío
form.addEventListener('submit', function(event) {
  event.preventDefault(); 

  const formData = new FormData(form);
  const formEmail = formData.get('email')
  const formPassword = formData.get('password')
const email = localStorage.getItem('email')
const password = localStorage.getItem('password')


 if(formEmail !== email){
  return  alert('no se encontró a un usuario con este correo')
 }
 if(formPassword !== password){
   return alert('la contraseña es incorrecta')
 }

 localStorage.setItem('islogged','true')
 window.location.href='../index.html'

});

