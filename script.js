const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', e => {
	e.preventDefault();
	const name = document.getElementById('name').value;
	const email = document.getElementById('email').value;
	localStorage.setItem('name', name);
	localStorage.setItem('email', email);
	window.location.href = 'notes.html';
});