content = """# 🛍️ Next.js Product Management e-shop

A simple full-stack **Next.js 15** project integrated with **MongoDB** for managing products and users.  
It includes authentication, protected routes, product management (add, view), and a user dashboard.  

---

## 🚀 Features
- 🔐 User Authentication (NextAuth.js with credentials + JWT)
- 🛡️ Protected Routes using Middleware
- 📦 Product Management (Add, View, Limit Results)
- 👤 User Dashboard (Name, Email, Photo, Role)
- 🎨 Modern UI with Tailwind CSS
- ⚡ Server Actions for database operations

---

## Tech Stack

-Next.js 15 (App Router)
-MongoDB
-NextAuth.js
-Tailwind CSS
-React Toastify
-SweetAlert2

## ⚙️ Setup & Installation

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/nextjs-product-app.git
cd nextjs-product-app

npm install

MONGODB_URI=your_mongodb_connection_string
NEXTAUTH_SECRET=your_secret_key
NEXTAUTH_URL=http://localhost:3000

npm run dev

