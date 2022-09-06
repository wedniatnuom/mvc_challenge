
//login function

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

// signup function

async function signup(event) {
  event.preventDefault();
  event.stopPropagation();
  console.log("signup function is running");

const name = document.getElementById('signup-name').value.trim();
const email = document.getElementById('signup-email').value.trim();
const password = document.getElementById('signup-password').value.trim();

  if (name && email && password) {
    console.log("awaiting fetch from routes")
    const response = await fetch('/api/signup', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      alert("Signed up! Please Login");
    } else {
      alert('Failed to signup');
    }
  }
};

let signup_el = document.getElementById('signup-btn');
signup_el.addEventListener('click', (e) => signup(e));