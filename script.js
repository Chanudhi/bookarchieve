document.addEventListener("DOMContentLoaded", function () {
    fetch('data.json')
    .then(response => response.json())
    .then(data => {
        const booklist = document.getElementById('book-list');
        data.forEach(book => {
            const bookItem = document.createElement('div');
            bookItem.classList.add('book-item');

            const img = document.createElement('img');
            img.src = book.image;
            img.alt = book.title;

            const title = document.createElement('h2');
            title.textContent = book.title;

            const author = document.createElement('p');
            author.textContent = `Author: ${book.author}`;

            const price = document.createElement('p');
            price.classList.add('price');  
            price.textContent = `Price: ${book.price}`;

            bookItem.appendChild(img); 
            bookItem.appendChild(title);
            bookItem.appendChild(author);
            bookItem.appendChild(price);

            booklist.appendChild(bookItem);
        });
    })
    .catch(error => console.error('Error fetching JSON:', error));
});
