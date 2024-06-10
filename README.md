# Bookfellow App

Client application that allows you manage your book collection.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

## Short User Manual

The Bookfellow application has two pages: 
- **Home Page** page, that explains the brand and ca be found on [http://localhost:3000](http://localhost:3000). From this page, the user can access the **Library Page** page by clicking the **Check Your Library** link from the header.
![Home Page](readme-assets/image.png)

- **Library** page, that provides the management part of the book collection. 
![Library Page](readme-assets/image-1.png)
  - Here the user can 
    - **Delete** a book by clicking on the *trash* button ![delete](readme-assets/image-2.png)
    - **Modify** the details of a  book by clicking on the *pen* button ![modify](readme-assets/image-3.png)
  
  ![Modify Form](readme-assets/image-5.png)
  
    - **Add a new book** by clicking on the *Add New Book* button ![alt text](readme-assets/image-4.png) and then 
  
  ![Add New Book Form](readme-assets/image-6.png)
    - **See Details** of a book by clicking on the book card.
  
  ![Book Details](readme-assets/image-7.png)

## Static Texts

All the client application texts are comming from `src/assets/static/text/static-text.json` and should be moved in a DB that can provide/store the necessary translations text.