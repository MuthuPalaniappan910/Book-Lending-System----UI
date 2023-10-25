const customerId = localStorage.getItem('customerId'); 
const customerDashboardUrl = `http://localhost:8801/customer/${customerId}`; 
 
fetch(customerDashboardUrl, { 
? ? "method": "GET", 
? ? headers: { 
? ? ? ? 'Content-Type': 'application/json' 
? ? }, 
}) 
? ? .then(response => { 
? ? ? ? console.log(response); 
? ? ? ? if (response.status === 200) { 
? ? ? ? ? ? return response.json(); 
? ? ? ? } else { 
? ? ? ? ? ? throw new Error(response.status); 
? ? ? ? } 
? ? }) 
? ? .then(data => { 
? ? ? ? document.getElementById("mobileNumber").value = data.mobileNumber; 
? ? ? ? document.getElementById("customerName").value = data.customerName; 
? ? ? ? document.getElementById("address").value = data.address; 
? ? ? ? document.getElementById("city").value = data.city; 
? ? ? ? document.getElementById("state").value = data.state; 
? ? }) 
