# Mental Health Chat Application - Backend

Welcome to the backend repository of our Mental Health Chat Application. This application is designed to provide a supportive platform for individuals to connect, share, and receive assistance related to mental health concerns.

## Technologies Used

Node.js
Express.js
MongoDB
Mongoose
Socket.IO
JSON Web Tokens (JWT)
Installation
Clone this repository to your local machine:

bash
Copy code
git clone <repository_url>
Install dependencies using npm:

bash
Copy code
npm install
Set up environment variables:

Create a .env file in the root directory and add the following variables:

makefile
Copy code
PORT=3000 # Port on which the server will run
MONGODB_URI=<mongodb_connection_uri> # MongoDB connection URI
JWT_SECRET=<your_jwt_secret_key> # Secret key for JWT token generation
Usage
To start the server, run the following command:

bash
Copy code
npm start
The server will start running at the specified port.

Endpoints
POST /api/auth/register: Register a new user
Request body: { username, email, password }
POST /api/auth/login: Login user
Request body: { email, password }
GET /api/user/profile: Get user profile
Authorization header with JWT token required
POST /api/chat/message: Send a message
Request body: { senderId, receiverId, message }
Authorization header with JWT token required
GET /api/chat/messages/:userId: Get messages between two users
Parameters: userId (receiverId)
Authorization header with JWT token required
Socket Events
connection: Establishes socket connection
disconnect: Closes socket connection
chat message: Sends a message to a specific user
Contributing
We welcome contributions from the community! Feel free to submit pull requests or raise issues.

License
This project is licensed under the MIT License.
