# Welcome to CRUDs Project

This project is an example of implementing the CRUD entities on the client side using React and Redux.

## CRUD Entities

### 1. Books

In this page you can see the Material Data Grid component which is rendering a client side array called books with custom row rendering based on each data field, where you can operate the full CRUD functionality such as add, edit and delete on the client side using local state.

### 2. Users

There are two routes for this entity to list all the users and have a deep review of each single user.

#### 2.1 Users List (/users)

In this page, you can see users loaded from [JSON Placeholder Users API](https://jsonplaceholder.typicode.com/users)
And by clicking on each item, you would navigate to the single user page to see the full details of the selected user

#### 2.2 Single User (/users/:id)

In this page, based on the id in the path parameter, you can see the user loaded from [JSON Placeholder Single User API](https://jsonplaceholder.typicode.com/users/1)

### 3. Products

In this page you can see the Material Data Grid component which is rendering a client side array called products
