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

> GET /api/words
> Retrieves a list of words.

Response:

```bash
[
  {
    "id": "60b8d295f8d4d90015db7f25",
    "word": "MODAL"
  },
  {
    "id": "60b8d295f8d4d90015db7f26",
    "word": "FANCY"
  }
  ...
]
```

> GET /api/random-word
> Retrieves a random word.

Response:

```bash
[
  {
    "id": "60b8d295f8d4d90015db7f25",
    "word": "RADIO"
  },
]
```

## Environment Variables

The application requires the following environment variables to be set:

MONGO: The connection string for your MongoDB database.
Create a .env file in the root directory of the project and add your environment variables:

```bash
MONGO=your_mongodb_connection_string
```
