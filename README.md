# **Authentication and RBAC System**

This project is a Node.js-based application that implements **Authentication**, **Authorization**, and **Role-Based Access Control (RBAC)**. It allows secure user registration, login, and access control based on roles such as `User`, `Admin`, and `Moderator`.

---

## **Features**

- **Authentication**: Secure user registration and login.
- **Authorization**: Role-based access to specific resources.
- **RBAC**: Flexible role-based access control for managing permissions.
- **Security**: 
  - Password hashing with bcrypt.
  - JWT for session management.
  - Input validation using express-validator.
- **Extensibility**: Modular structure for easy scalability.

---

## **Technologies Used**

- **Node.js**: JavaScript runtime environment.
- **Express.js**: Web framework for building APIs.
- **MongoDB**: NoSQL database for data storage.
- **Mongoose**: Object modeling for MongoDB.
- **bcrypt.js**: For password hashing.
- **jsonwebtoken**: For JWT-based authentication.
- **dotenv**: Environment variable management.
- **express-validator**: Input validation middleware.

---

## **Project Structure**

project/
├── config/
│   ├── db.js                # MongoDB configuration
├── controllers/
│   ├── authController.js    # Authentication logic
│   ├── userController.js    # User management logic
├── middlewares/
│   ├── authMiddleware.js    # Authentication middleware
│   ├── roleMiddleware.js    # RBAC middleware
├── models/
│   ├── User.js              # User schema
├── routes/
│   ├── auth.js              # Authentication routes
│   ├── user.js              # User-related routes
├── utils/
│   ├── validation.js        # Validation utilities
│   ├── jwt.js               # JWT token management utilities
├── .env                     # Environment variables
├── server.js                # Main entry point
├── package.json             # Dependencies



### **Prerequisites**

- **Node.js** (v14 or higher)
- **MongoDB** (local instance or a cloud service like MongoDB Atlas)

### **Installation**

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/auth-rbac-system.git
   cd auth-rbac-system



