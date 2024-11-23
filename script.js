document.addEventListener('DOMContentLoaded', function () {
    const logoutBtn = document.getElementById('logout-btn');
    const loginBtn = document.getElementById('login-btn');
    const usernameDisplay = document.getElementById('username');

    
    const isLogged = localStorage.getItem('islogged');
    const firstName = localStorage.getItem('name'); 
    const lastName = localStorage.getItem('lastName'); 

    if (isLogged && firstName && lastName) {
       
        loginBtn.style.display = 'none';
        logoutBtn.style.display = 'inline-block';
        usernameDisplay.textContent = `${firstName} ${lastName}`;
    } else {
       
        loginBtn.style.display = 'inline-block';
        logoutBtn.style.display = 'none';
        usernameDisplay.textContent = '';
    }

  
    logoutBtn.addEventListener('click', function () {
        localStorage.removeItem('islogged');
        localStorage.removeItem('name');
        localStorage.removeItem('lastName'); 
        location.reload(); 
    });
});