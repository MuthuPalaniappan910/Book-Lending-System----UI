const deleteBookButton = document.getElementById('deleteBook'); 
deleteBookButton.addEventListener('click', (e) => { 
    e.preventDefault(); 
    const bookId = sessionStorage.getItem("bookId"); 
    const customerId = localStorage.getItem('customerId'); 
    const deleteBookUrl = `http://localhost:8800/books/book/${bookId}/delete/${customerId}`; 
 
 
    fetch(deleteBookUrl, { 
        "method": "DELETE", 
        headers: { 
            'Content-Type': 'application/json' 
        }, 
    }) 
        .then(response => { 
            console.log(response); 
            if (response.status === 200) { 
                return response.json(); 
            } else { 
                throw new Error(response.status); 
            } 
        }) 
        .then(data => { 
            if (data.result) { 
                console.log("Delete Book Response : ", data.message); 
            } else { 
                console.log("Delete Book Response : ", data.message); 
            } 
            document.getElementById("message").innerText = data.message; 
        }) 
}) 
 
 
function navigateDeletePage(e) { 
? ? const bookId = e.target.parentNode.id; 
? ? sessionStorage.setItem("bookId", bookId); 
? ? const path = location.pathname.split('/'); 
? ? path[path.length - 1] = "DeleteBook.html"; 
? ? location.pathname = path.join('/'); 
? ? route("DeleteBook.html"); 
} 