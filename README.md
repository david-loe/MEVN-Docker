# MEVN-Docker

A boilerplate for creating a full-stack web application using the **MEVN** (MongoDB, Express, Vue.js, Node.js) stack, preconfigured with Docker to simplify deployment and development.

## Features

- **MongoDB**: NoSQL database for scalable and flexible data storage.
- **Express**: Backend framework for building RESTful APIs.
- **Vue.js**: Reactive front-end framework for building modern user interfaces.
- **Node.js**: JavaScript runtime for the backend.
- **Docker**: Preconfigured Docker setup to containerize the application for consistent environments across development and production.

## Getting Started

### Prerequisites

Ensure you have the following installed on your system:

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

### Clone the Repository

```bash
git clone https://github.com/david-loe/MEVN-Docker.git
cd MEVN-Docker
```

### Create the `.env` File

Before starting the application, create the `.env` file by copying the example file:

```bash
cp .env.example .env
```

You can then customize the `.env` file as needed (see [Environment Variables](#environment-variables)).

### Project Structure

```plaintext
MEVN-Docker/
├── backend/          # Express backend code
├── frontend/         # Vue.js frontend code
├── docker-compose.yml # Docker configuration for services
├── README.md         # Project documentation
└── .env              # Environment variables
```

## Quick Start

### 1. Build and Start the Application

Run the following command to start the application:

```bash
docker-compose up --build
```

### 2. Access the Application

Once the containers are running:

- **Frontend**: Open your browser and navigate to `http://localhost:5000`
- **Backend API**: Access the backend API at `http://localhost:8000`
- **MongoExpress**: (ONLY in development mode) at `http://localhost:8081`

### 3. Stop the Application

To stop and remove all running containers:

```bash
docker-compose down
```
