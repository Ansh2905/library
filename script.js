let myLibrary = [];

let popUp = document.querySelector('#form-container');

let createBookBtn = document.querySelector(".btn");
createBookBtn.addEventListener('click', () => popUp.style.display = "block");

let submitBtn = document.querySelector("#submit-form");
submitBtn.addEventListener('click', addBookToLibrary);
submitBtn.addEventListener('click', resetForm);
submitBtn.addEventListener('click', () => popUp.style.display = "none");


let closeBtn = document.querySelector("#close-form");
closeBtn.addEventListener('click', resetForm);
closeBtn.addEventListener('click', () => popUp.style.display = "none");



function Book(title, author, pages, read){
    this.title = title.value,
    this.author = author.value;
    this.pages = pages.value;
    this.read = read;
}

function resetForm(e)
{
    e.preventDefault();
    document.getElementById('form').reset();
}

function addBookToLibrary(e) 
{
    e.preventDefault();
    let titleElement = document.getElementById('title');
    let authorElement = document.getElementById('author');
    let pagesElement = document.getElementById('pages');
    let read = "Not Read";
    if(document.getElementById('yes').checked)
    {
        read = "Read";
    }
    newBook = new Book(titleElement, authorElement, pagesElement, read);
    
    addGridElement(newBook, read);
    
}

function addGridElement(newBook, read)
{
    let card= document.createElement('div');
    let titlePara = document.createElement('div');
    let authorPara = document.createElement('div');
    let pagesPara = document.createElement('div');

    let readButton = document.createElement('button');
    readButton.classList = "card-buttons book-content read-button";

    if(read == "Read")
    {
        readButton.style.backgroundColor = "green";
    }
    else if(read == "Not Read")
    {
        readButton.style.backgroundColor = "rgb(218, 23, 23)";
    }

    titlePara.textContent = `Title: ${newBook.title}`;
    authorPara.textContent = `Author: ${newBook.author}`;
    pagesPara.textContent = `Pages: ${newBook.pages}`;
    titlePara.classList.add('book-content');
    authorPara.classList.add('book-content');
    pagesPara.classList.add('book-content');

    readButton.textContent = newBook.read;
    let removeBookButton = document.createElement('button');
    removeBookButton.textContent = "Remove";
    removeBookButton.classList = 'book-content card-buttons remove-button';

    card.appendChild(titlePara);
    card.appendChild(authorPara);
    card.appendChild(pagesPara);
    card.appendChild(readButton);
    card.appendChild(removeBookButton);
    card.classList.add('book');
    let bookGrid = document.querySelector('.book-grid');
    bookGrid.appendChild(card);
    myLibrary.push(newBook);
    console.log(myLibrary[1]);
}

