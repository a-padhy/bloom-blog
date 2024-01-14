# BloomBlog - MERN Stack

This project is a full-stack web application built using React for the frontend and Express.js with MongoDB for the backend. The frontend features a register and login page, a homepage to list all the blogs, a dedicated page for blog details, a page to let users create new blogs as well as edit blogs created by that user. 
TailwindCSS is used to style the web application.

The accomodation detail page that displays information such as title, descriptions, photos, author details, etc. 

To use the application, users must first sign up with their name, email and password. Once signed in, they can browse through all blogs, book them, create new ones, edit them, etc. 

## Screenshots
## Video

 
## Installation

To run this project, you'll need to have Node.js and MongoDB installed on your system. You can download Node.js from the official website: https://nodejs.org/, and install MongoDB by following the instructions provided here: https://docs.mongodb.com/manual/installation/.

To install the project dependencies, follow these steps:

Clone the repository to your local machine using the following command:

bash
Copy code
git clone https://github.com/your-name/your-project-name.git
Navigate to the project directory:

bash
Copy code
```bash
cd your-project
```
Install the frontend dependencies:
```bash
cd client
npm install
```
Navigate to the backend directory:

```bash
cd api
```
Install the backend dependencies:

```bash
npm install
```
Create a .env file in the backend directory, and set the following environment variables:

makefile
```bash
MONGO_URL=<your-mongodb-uri>
```
Replace <your-mongodb-uri> with the URI of your MongoDB database.

Start the backend server:

```bash
npm start
```
Open a new terminal window, navigate to the project directory, and start the frontend server:

```bash
npm start
```
Open your web browser and navigate to http://localhost:3000 to view the application.

That's it! You should now be able to run the application locally. If you encounter any issues, please refer to the project documentation or create a new issue on the project's GitHub repository.
    
  
