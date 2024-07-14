# Booking System Microservices

## Overview

This project is a microservices-based booking system that includes various services to manage users, bookings, payments, and notifications. It also includes an API gateway for routing and monitoring/logging services for observability.

## Architecture

The system is divided into the following microservices:

- **User Management Service**: Handles user registration, authentication, and profile management.
- **Booking Service**: Manages booking creation, modification, and cancellation.
- **Payment Service**: Processes payments and handles payment-related queries.
- **Notification Service**: Sends notifications (emails, SMS) to users regarding their bookings and other updates.
- **API Gateway**: Routes requests to appropriate services and handles cross-cutting concerns such as authentication and rate limiting.
- **Monitoring and Logging**: Includes tools for monitoring the system and logging service activities (e.g., Prometheus, Grafana, ELK stack).

## Services

1. **User Management Service**
   - **Description**: Manages user-related operations such as registration, login, profile updates, and password management.
   - **Technologies**: Node.js, Express, MongoDB.

2. **Booking Service**
   - **Description**: Handles all booking-related operations such as creating new bookings, updating existing bookings, and canceling bookings.
   - **Technologies**: Node.js, Express, MongoDB.

3. **Payment Service**
   - **Description**: Manages payment processing and maintains payment records.
   - **Technologies**: Node.js, Express, MongoDB, Stripe (or other payment gateway).

4. **Notification Service**
   - **Description**: Sends notifications to users via email or SMS regarding their bookings and other relevant information.
   - **Technologies**: Node.js, Express, Twilio (or other notification service).

5. **API Gateway**
   - **Description**: Acts as a single entry point for all client requests, routing them to the appropriate microservice and handling cross-cutting concerns.
   - **Technologies**: Node.js, Express, Kong (or another API gateway solution).

6. **Monitoring and Logging**
   - **Description**: Provides observability into the system's health and performance through monitoring and logging.
   - **Technologies**: Prometheus, Grafana, ELK stack (Elasticsearch, Logstash, Kibana).

## Setup and Installation

### Prerequisites

- Node.js
- Docker
- Kubernetes
- Docker Compose

### Running the Services

#### Kafka and Zookeeper Setup

1. Navigate to the project directory.
2. Run the following command to start Kafka and Zookeeper:
   ``bash
   docker-compose -f docker-compose.kafka.yml up -d
