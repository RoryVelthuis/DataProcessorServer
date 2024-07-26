# DataProcessorServer

DataProcessorServer is a simple server application that processes numerical input data using a Python script. The server is built with Node.js and Express, and it communicates with the Python script to process the data.

## Description

This project consists of a Node.js server that accepts POST requests with numerical input data, passes the data to a Python script for processing, and returns the processed data as a response. The server uses Express for handling HTTP requests and `child_process` to spawn the Python script.

## Prerequisites

- Node.js (v14 or higher)
- Python (v3.6 or higher)

## Setup

1. **Clone the repository:**

    ```sh
    git clone <repository-url>
    cd DataProcessorServer
    ```

2. **Install Node.js dependencies:**

    ```sh
    npm install
    ```

3. **Create a `.env` file:**

    Create a `.env` file in the root directory and add the following content:

    ```env
    PORT=3000
    ```

4. **Run the server:**

    ```sh
    npm run dev
    ```

    The server will start running at `http://localhost:3000`.

## Usage

To use the server, send a POST request to `http://localhost:3000/api/run` with a JSON body containing numerical input data. For example:

```json
{
    "input": 5
}