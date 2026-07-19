# Appetizer - MERN Stack Food Delivery Application

A modern, responsive, and full-featured MERN (MongoDB, Express.js, React, Node.js) stack food delivery application. The repository contains three separate services managed in a monorepo setup: a user storefront, an administrative dashboard, and a robust backend API.

---

## 🚀 Features

### 🛒 User Storefront (`frontend`)
*   **Dynamic Food Catalog**: Browse food items filtered by categories (Salads, Rolls, Deserts, Sandwiches, Cakes, Pasta, Noodles, etc.).
*   **Cart System**: Add/remove items with real-time total price calculation.
*   **User Authentication**: Secure register and login functionality.
*   **Stripe Integration**: Checkout portal for secure payments (configured via Stripe SDK).
*   **Order Tracking**: View past orders and status updates.

### 💼 Admin Panel (`admin`)
*   **Food Inventory Management**: Add new dishes (name, description, price, category, and image upload) and remove outdated dishes.
*   **Order Operations**: Track incoming orders and update delivery statuses.

### ⚙️ Backend Server (`backend`)
*   **RESTful API**: Clean API endpoints for users, cart data, ordering, and food items.
*   **Smart Database Seeding**: Automatic seeding script that populates the database with 32 default food assets and image files if the collection is empty.
*   **Serverless Compatibility**: Optimized for read-only cloud environments (like Vercel) by pre-packaging asset uploads.

---

## 📁 Repository Structure

```text
FoodDeliveryApp/
├── frontend/        # Vite + React storefront client
├── admin/           # Vite + React administrative dashboard
├── backend/         # Express + Node.js REST API
│   ├── config/      # DB connection & database seeding logic
│   ├── controllers/ # Request controllers (cart, food, orders, users)
│   ├── models/      # Mongoose schemas (food, order, user)
│   └── uploads/     # Static image storage for uploads
├── vercel.json      # Vercel multi-service deployment configuration
└── README.md        # Documentation
```

---

## 💻 Local Development Setup

### Prerequisites
*   Node.js (v18 or higher)
*   MongoDB installed locally or an active MongoDB Atlas cluster

### 1. Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `backend` directory and add your configurations:
   ```env
   JWT_SECRET="your_jwt_secret"
   STRIPE_SECRET_KEY="your_stripe_secret_key"
   MONGODB_URI="mongodb://localhost:27017/FoodDeliveryApp"
   ```
4. Start the local Express server:
   ```bash
   npm run server
   ```
   *(Note: The server will automatically connect to MongoDB and seed the 32 default food items and copy images to `/uploads` on first startup if the database is empty.)*

### 2. Storefront Setup
1. Navigate to the frontend directory:
   ```bash
   cd ../frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Vite development server:
   ```bash
   npm run dev
   ```

### 3. Admin Panel Setup
1. Navigate to the admin directory:
   ```bash
   cd ../admin
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Vite development server:
   ```bash
   npm run dev
   ```

---

## 🛡️ Database Seeding

The backend includes a **smart seeding mechanism** in [seed.js](backend/config/seed.js) called during database connection:
*   It checks the `foods` collection count.
*   If the database is empty, it populates it with the 32 default dishes.
*   It automatically places clean-named images (`food_1.png` to `food_32.png`) inside `backend/uploads/` so they are statically servable via `/images/<filename>`.

---

## 🌐 Vercel Multi-Service Deployment

This repository is pre-configured for Vercel's multi-service deployment via the root-level [vercel.json](vercel.json):
*   **Routing Rules**:
    *   `/api/*` requests route to the `backend` service.
    *   `/images/*` requests route to the `backend` service (to serve static uploads).
    *   `/admin/*` requests route to the `admin` Vite dashboard.
    *   `/*` requests route to the `frontend` Vite storefront.
*   **Build Adjustments**:
    *   The frontend and admin panels dynamically adjust their backend API endpoints in production to run relatively (`""`), removing localhost port lock.
    *   React Router and Vite base builds are adjusted for sub-directory routing under `/admin/` in production.
