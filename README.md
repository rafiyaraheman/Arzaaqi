# Arzaaqi - E-commerce Platform

Arzaaqi is a full-stack e-commerce platform that allows users to browse products, add items to their cart, place orders, and manage user authentication.

## 🚀 Features

- User Authentication (Register, Login, Logout, Session Handling)
- Admin Panel for Product & Order Management
- Add to Cart & Checkout System
- Product Search & Reviews
- Secure API with JWT & Cookies
- Backend with Express.js & MongoDB
- Frontend with Vite + React.js

## 🛠️ Tech Stack

### **Frontend**

- React.js (Vite)
- Redux Toolkit for State Management
- Axios for API Requests
- Tailwind CSS for Styling
- Vercel for Deployment

### **Backend**

- Node.js with Express.js
- MongoDB with Mongoose
- JWT for Authentication
- Cookie-based Sessions
- CORS & Secure Headers

## 🔧 Installation & Setup

### 1️⃣ Clone the Repository

```sh
git clone https://github.com/your-username/arzaaqi.git
cd arzaaqi
```

### 2️⃣ Backend Setup

```sh
cd server
npm install
```

Create a **.env** file inside the `server/` directory and add:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

Run the server:

```sh
npm start
```

### 3️⃣ Frontend Setup

```sh
cd client
npm install
```

Create a **.env** file inside the `client/` directory and add:

```
VITE_API_URL=http://localhost:5000
```

Run the frontend:

```sh
npm run dev
```

## 🌍 Deployment

### **Deploy Backend (e.g., Render, Railway, or VPS)**

After deploying the backend, update the frontend `.env`:

```
VITE_API_URL=https://your-backend-url.com
```

### **Deploy Frontend on Vercel**

1. Push your project to GitHub.
2. Go to [Vercel](https://vercel.com) and import your repository.
3. Add the `VITE_API_URL` environment variable in Vercel settings.
4. Deploy the frontend.

## ⚠️ Common Issues & Fixes

### **CORS Error?**

Update `server/index.js` to allow your frontend URL:

```js
app.use(cors({
  origin: ["http://localhost:5173", "https://arzaaqi.vercel.app"],
  credentials: true
}));
```

### **Unauthorized Requests?**

- Ensure the backend is running properly.
- Check if cookies are enabled in the browser.
- Verify `withCredentials: true` in Axios requests.



💡 **Developed by Rafiya**

