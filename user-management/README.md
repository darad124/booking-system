
# User Management Service

This is a user management microservice for the booking system project. It handles user registration, login, and profile management.

# Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Environment Variables](#environment-variables)
- [Docker Instructions](#docker-instructions)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

# Prerequisites

- [Node.js](https://nodejs.org/) (version 16.x)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

``

``

# Installation

1. Clone the repository:
   ``sh
   git clone https://github.com/yourusername/booking-system.git
   cd booking-system/user-management
   ``

2. Install dependencies:

   ``sh
   npm install
   ``

``

# Usage

1. Start the MongoDB service:
   ``sh
   docker-compose up -d mongo
   ``

2. Run the user management service:

   ``sh
   npm start
   ``

The service will be available at `http://localhost:3000`.

``

``

## Environment Variables

Create a `.env` file in the root directory and add the following variables:

``
NODE_ENV=development
PORT=3000
MONGO_URI=mongodb://mongo:27017/user-management
JWT_SECRET=your_jwt_secret_here
JWT_EXPIRE=30d

``

``

# Docker Instructions

1. Build and run the containers:
   ``
   docker-compose up --build
   ``

2. The user management service will be available at `http://localhost:3000`.

# Testing

(Currently, no tests are specified. Update the `scripts` section in `package.json` to include test scripts.)

To run tests (when implemented):
``sh
npm test
``

``

# Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

``

## License

This project is licensed under the ISC License.

---
