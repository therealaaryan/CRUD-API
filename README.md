
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

- Node.js (version x.x.x)
- MongoDB (version x.x.x)

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

GET /api/ : Get a list of all products.
GET /api/:id : Get a specific product by ID.
POST /api/ : Create a new product.
PUT /api/:id : Update an existing product by ID.
DELETE /api/ : Delete a product by entering the JSON.


## Data Schema

{
  "name": "String",
  "quantity": "Number",
  "price": "Number",
  "image": "String"
}


## Error Handling
