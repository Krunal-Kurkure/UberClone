# 🚖 Uber Clone (MERN Stack)

A full-stack Uber-like ride booking application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). This project replicates core ride-hailing features such as booking rides, managing drivers, and tracking trips with a responsive UI and secure backend.

---

## 📌 Features

### 👤 Rider (User)

* Register and login with JWT authentication
* Book rides with pickup & destination
* Get fare estimates
* View ride history
* Track ride status

### 🚗 Driver

* Register and login
* Accept or reject ride requests
* Update ride status (Arrived, Started, Completed)
* View trip history and earnings

### 🌐 General Features

* Secure REST APIs
* Role-based authentication (User / Driver)
* Responsive UI
* Real-time updates (Socket.io if implemented)
* Map integration (optional)

---

## 🛠️ Tech Stack

Frontend:

* React.js
* Axios
* React Router
* Tailwind CSS / Bootstrap

Backend:

* Node.js
* Express.js

Database:

* MongoDB (Mongoose)

Other Tools:

* JSON Web Token (JWT)
* Socket.io (optional)
* Google Maps API (optional)


## ⚙️ Installation & Setup

### 1. Clone Repository

git clone https://github.com/Krunal-Kurkure/UberClone.git
cd uber-clone

---

### 2. Backend Setup

cd server
npm install

Create a `.env` file inside server folder:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

Run backend:

npm start

---

### 3. Frontend Setup

cd client
npm install

Run frontend:

npm start

---

## 🔐 Environment Variables

PORT = Backend server port
MONGO_URI = MongoDB connection string
JWT_SECRET = Secret key for authentication

---

## 🚀 API Endpoints

### Auth Routes

POST   /api/auth/register
POST   /api/auth/login

### User Routes

GET    /api/user/profile
POST   /api/user/book-ride
GET    /api/user/rides

### Driver Routes

POST   /api/driver/register
POST   /api/driver/login
GET    /api/driver/rides
PATCH  /api/driver/update-status

---

## 🧪 Testing

Use tools like:

* Postman
* Thunder Client


## 🧠 Future Improvements

* Online payments (Stripe / Razorpay)
* Live GPS tracking
* Ride scheduling
* Ratings & reviews
* Admin dashboard
* Push notifications

---

## 🤝 Contributing

1. Fork the repository
2. Create a new branch
3. Commit changes
4. Push to GitHub
5. Open a Pull Request

