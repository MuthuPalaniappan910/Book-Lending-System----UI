const registerButton = document.getElementById('registerButton');�
�
registerButton.addEventListener('click', (e) => {�
? ? e.preventDefault();�
? ? const customerRegistrationUrl = 'http://localhost:8801/customer/register';�
? ? const mobileNumber = document.querySelector('#mobileNumber').value;�
? ? const customerName = document.querySelector('#customerName').value;�
? ? const address = document.querySelector('#address').value;�
? ? const city = document.querySelector('#city').value;�
? ? const state = document.querySelector('#state').value;�
? ? const password = document.querySelector('#password').value;�
�
? ? fetch(customerRegistrationUrl, {�
? ? ? ? "method": "POST",�
? ? ? ? headers: {�
? ? ? ? ? ? 'Content-Type': 'application/json'�
? ? ? ? },�
? ? ? ? body: JSON.stringify({�
? ? ? ? ? ? mobileNumber: mobileNumber,�
? ? ? ? ? ? customerName: customerName,�
? ? ? ? ? ? address: address,�
? ? ? ? ? ? city: city,�
? ? ? ? ? ? state: state,�
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
? ? ? ? ? ? ? ? console.log("Regisration Response : ", data.message);�
? ? ? ? ? ? } else {�
? ? ? ? ? ? ? ? console.log(data.message);�
? ? ? ? ? ? }�
? ? ? ? })�
})�