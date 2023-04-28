let myLibrary = [];


// book constructor
function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}


// display the books within the myLibrary array on teh page
function render(){
    let libraryBook = document.querySelector("#library");
    libraryBook.innerHTML = "";
    myLibrary.forEach((book => {
     let bookEl = document.createElement("div");
     bookEl.innerHTML = 
     `<div class="card">
     <h3 class="title">${book.title}</h3>
     <h5 class="author">${book.author}</h5>
     <p>${book.pages}</p>
     <p class="read-status">${book.read ? "Read" : "Not Read Yet"}</p>
     </div>`
     libraryBook.appendChild(bookEl)
    }))
}


// add a new book to the library array
function addBookToLibrary(){
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let read = document.getElementById("read").checked;
 
    // create a new book object using the book constructor
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook)
    render();
}


// show book form when new book button clicked
let newBookBtn = document.querySelector("#new-book-btn");
newBookBtn.addEventListener("click", function(){
    let newBookForm = document.querySelector("#new-book-form");
    newBookForm.classList.toggle("display")
})

// when teh form is submited call ther addBookToLibrary function and also pass in teh event to prevent default behaviour
document.querySelector("#new-book-form").addEventListener("submit", function(e){
    e.preventDefault();
    addBookToLibrary()

})
