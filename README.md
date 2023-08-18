
# Node.js CRUD API with Express.js and MongoDB

This repository contains a CRUD (Create, Read, Update, Delete) API built using Node.js, Express.js, and MongoDB (using Mongoose). This API allows you to perform basic CRUD operations on a collection of data, providing endpoints for creating, reading, updating, and deleting records.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Data Schema](#data-schema)
- [Error Handling](#error-handling)
- [Contributing](#contributing)
- [License](#license)

## Prerequisites

Before you begin, ensure you have the following installed:

- node.js (version 18.16.0)
- cors (version 2.8.5)
- dotenv (version 16.3.1)
- express (version 4.18.2)
- express-async-handler (version 1.2.0)
- mongoose (version 7.4.3)
- nodemon (version 3.0.1)

## Installation

1. Clone this repository:

```bash
git clone https://github.com/therealaaryan/CRUD-API.git
cd CRUD-API
```
2. Install dependencies:

```bash
npm install
```

3. Rename .env.example to .env and update the MongoDB connection URL if necessary.

## Usage

To start the API server, run the following command:

```bash
node server.js
```

The API will be available at http://localhost:3000.


## Endpoints

The following endpoints are available:

1) GET /api/ : Get a list of all products.
2) GET /api/:id : Get a specific product by ID.
3) POST /api/ : Create a new product.
4) PUT /api/:id : Update an existing product by ID.
5) DELETE /api/ : Delete a product by entering the JSON.


## Data Schema

{
  "name": "String",
  "quantity": "Number",
  "price": "Number",
  "image": "String"
}


## Error Handling

The API provides appropriate error handling and validation for various scenarios. In case of an error, you will receive a JSON response with an error message and status code.

## Contributing

Contributions are welcome! If you find a bug or want to add a new feature, please follow these steps:

1) Fork the repository.
2) Create a new branch for your feature/fix.
3) Make your changes and test thoroughly.
4) Submit a pull request explaining your changes.


## License

This project is licensed under the ISC License.
