# MERN E-commerce

This is a MERN (MongoDB, Express.js, React.js, Node.js) stack E-commerce application with features like product listing, product details, cart functionality, user authentication, and payment processing.

## Installation

To run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/ps8847/mern-ecommerce-bas.git
    ```
2. Install dependencies:
    
    For backend:
    
    ```bash
    cd backend
    npm install
    ```

    For frontend:
    ```bash
    cd frontend
    npm install
    ```

3. Create .env files:
    
    For backend:Create a .env file in the backend directory with the following fields:

    ```bash
    CLOUD_NAME =
    CLOUD_API_KEY =
    CLOUD_API_SECRET =
    STRIPE_SECRET =
    MONGO_URL =
    ```

    For frontend:Create a .env file in the frontend directory with the following fields:

    ```bash
    cloudname =
    preset =
    ```

4. Start the development servers:

    For backend:
    ```bash
    cd backend
    npm start
    ```

    For frontend:
    ```bash
    cd frontend
    npm start
    ```

## Tech Stack

**Frontend:**
React.js
Redux
Cloudinary


**Backend:**
Node.js
Express.js
MongoDB
Cloudinary (for image management)
Stripe (for payment processing)
Features

## User Panel:
User authentication
Product browsing
Product details
Shopping cart
Checkout and payment processing

## Admin Panel:
Product management (add, edit, delete)
User management
Order management
Dashboard for sales analytics


## Contributing
Contributions are welcome! Please feel free to submit a pull request.

## License
This project is licensed under the MIT License - see the LICENSE file for details.