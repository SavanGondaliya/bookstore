# Book Store Project

## intruction to install project

1. clone project using *git clone https://github.com/SavanGondaliya/Bookstore.git*
2. then ***cd backend -> npm install -> npm run dev ***
3. as well as ***cd frontend -> npm install -> npm run dev ***

## backend functionality

### Apis :

***books/*** : *this endpoint uses **post** http request to create new book in database where method name is **createBook**.there also another method at this endpoint where http method is **GET** to fetch books from database*

***books/:id*** : *this endpoint uses **GET** http method to fetch particular book data using **id** params where method name is **getBookById**.*

***books/edit/:id*** : *this endpoint uses **PUT** http method to update the book data using **id** params where method name is  **updateBook**.*

***books/delete/:id*** : *this endpoint uses **DELETE** http method to delete the book using **id** params where method name is **deleteBook**.*

***Auth Middleware*** : *Auth middleware check that a request has a valid token or not while requesting book apis*

## frontend functionality

### components :

1. **CreateBook** : *component that used to create new book where state management done by ***useState*** with UI*
2. **EditBook** : *component that used to Update book where state management done by ***useState*** with good UI *
3. **DeleteBook** : *component that used to delete book where state management done by ***useState*** with good UI*

***pages***
1. **Books** : *Book Page has all books preview with details and options of create new book, login and UI with list and cards*
2. **Card** : *Card Page has brief detail about Book with Delete and Update Option for Authorized User.*
3. **Login** : *Login Page for login to authorized user.*

***utils***
1. **protected Route** : *protected route that checks token in localstorage for some protected routes*