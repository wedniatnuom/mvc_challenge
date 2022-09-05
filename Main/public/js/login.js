async function login(event) {
    event.preventDefault();
    event.stopPropagation();
    console.log("login function is running");
  
    const email = document.getElementById('email-login').value.trim();
    const password = document.getElementById('password-login').value.trim();
 
    if (email && password) {
      console.log("awaiting fetch from routes")
      const response = await fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to log in');
      }
    }
  };
  
  let login_el = document.getElementById('login-btn');
  login_el.addEventListener('click', (e) => login(e));
  