const route = function (routeToPath) {�
? ? const path = location.pathname.split('/');�
? ? path[path.length - 1] = routeToPath;�
? ? location.pathname = path.join('/');�
}�
�
const login = document.getElementById('login');�
login.addEventListener('click', (e) => {�
? ? e.preventDefault();�
? ? const loginUrl = 'http://localhost:8801/customer/login';�
? ? const mobile = document.querySelector('#mobile').value;�
? ? const password = document.querySelector('#password').value;�
? ? console.log({ mobile, password });�
? ? fetch(loginUrl, {�
? ? ? ? "method": "POST",�
? ? ? ? headers: {�
? ? ? ? ? ? 'Content-Type': 'application/json'�
? ? ? ? },�
? ? ? ? body: JSON.stringify({�
? ? ? ? ? ? mobileNumber: mobile,�
? ? ? ? ? ? password: password�
? ? ? ? })�
? ? })�
? ? ? ? .then(response => {�
? ? ? ? ? ? console.log(response);�
? ? ? ? ? ? if (response.status === 200) {�
? ? ? ? ? ? ? ? return response.json();�
? ? ? ? ? ? } else {�
? ? ? ? ? ? ? ? throw new Error(response.status);�
? ? ? ? ? ? }�
? ? ? ? })�
? ? ? ? .then(data => {�
? ? ? ? ? ? if (data.result) {�
? ? ? ? ? ? ? ? console.log("Login Response : ", data.message);�
? ? ? ? ? ? ? ? localStorage.setItem('customerId', parseInt(data.message));�
? ? ? ? ? ? ? ? route('PostLogin.html'); ? ? ? ? ? ? ? ?�
? ? ? ? ? ? } else {�
? ? ? ? ? ? ? ? document.getElementById("errorMessage").innerText = data.message;�
? ? ? ? ? ? }�
? ? ? ? })�
})�