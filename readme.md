# Game Guess API

## Overview

The Game Guess API is a backend service for a word guessing game. It provides endpoints to retrieve a list of words or a random word that players can use to play the game.

## Installation

To get started, clone the repository and install the dependencies:

```bash
git clone https://github.com/aligoknl/game-guess-api.git
cd game-guess-api
npm install
```

## Usage

To start the server, use the following command:

```bash
npm start
```

For development purposes, you can use Nodemon to automatically restart the server on file changes:

```bash
npm run dev
```

## Endpoints

### GET /api/words/all-words

Retrieves a list of words.

**Response:**

```json
{
  "id": "60b8d295f8d4d90015db7f25",
  "word": "RADIO"
},
{
  "id": "60b8d295f8d4d90015db7f26",
  "word": "MODAL"
}
```

### GET /api/words/random-word

Retrieves a random word.

**Response:**

```json
{
  "id": "60b8d295f8d4d90015db7f25",
  "word": "RADIO"
}
```

### POST /api/words/validate

Validate the word

Request Body:

```json
{
  "word": "string"
}
```

Response:

```json
{
  "isValid": "boolean"
}
```

### GET /api/scores/top-scores

Retrieves the top 10 scores

Response:

```json
[
  {
    "username": "string",
    "score": "number"
  },
  {
    "username": "string",
    "score": "number"
  }
  ...
]
```

### POST /api/scores/save-score

Save a score for a user

Request Body:

```json
{
  "username": "string",
  "score": "number"
}
```

Response:

```json
{
  "message": "Score saved successfully"
}
```

## Environment Variables

The application requires the following environment variables to be set:

- `MONGO`: The connection string for your MongoDB database.

Create a `.env` file in the root directory of the project and add your environment variables:

```bash
MONGO=your_mongodb_connection_string
```

## License

This project is licensed under the MIT License.
