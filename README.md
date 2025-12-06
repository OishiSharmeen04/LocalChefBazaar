# 🍽️ LocalChefBazaar

### A Modern Marketplace for Homemade Food Delivery

LocalChefBazaar connects passionate home chefs with food lovers seeking fresh, authentic, and delicious homemade meals. Experience the taste of home-cooked food delivered right to your doorstep.

---

## 🌐 Live Demo

- **Live Site:** [https://localchefbazaar.web.app](https://your-live-url.com)
- **Admin Email:** admin@localchef.com
- **Admin Password:** Admin@123

---

## 📋 Project Purpose

LocalChefBazaar aims to empower home cooks by providing them a platform to monetize their culinary skills while offering customers access to affordable, healthy, and authentic homemade meals. The platform bridges the gap between traditional home cooking and modern food delivery services.

---

## ✨ Key Features

### For Customers
- 🔍 Browse daily fresh meals from local home chefs
- 🛒 Easy ordering process with real-time order tracking
- 💳 Secure payment integration with Stripe
- ⭐ Rate and review meals
- ❤️ Add favorite meals for quick access
- 📱 Fully responsive mobile-friendly design

### For Chefs
- 👨‍🍳 Create and manage meal listings
- 📦 Receive and manage customer orders
- ✅ Accept/reject/deliver orders with status updates
- 💰 Track earnings and order history

### For Admins
- 👥 Comprehensive user management system
- 🔐 Role-based access control (User/Chef/Admin)
- 📊 Platform statistics dashboard with visual charts
- 🚫 Fraud detection and user status management
- ✔️ Approve/reject chef and admin requests

---

## 🛠️ Technologies Used

### Frontend
- **React.js** - UI library
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations
- **React Hook Form** - Form handling and validation
- **Firebase** - User authentication
- **Axios** - HTTP requests
- **Stripe** - Payment processing
- **Recharts** - Data visualization
- **SweetAlert2 & React Hot Toast** - User notifications
- **React Helmet Async** - Dynamic page titles
- **React Icons** - Icon library

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **JWT** - Secure authentication tokens
- **Bcryptjs** - Password hashing
- **Cookie Parser** - Cookie handling
- **Stripe** - Payment API
- **CORS** - Cross-origin resource sharing
- **Dotenv** - Environment variable management

---

## 📦 NPM Packages

### Client Side
```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.20.0",
    "tailwindcss": "^3.4.0",
    "framer-motion": "^10.16.0",
    "firebase": "^10.7.0",
    "axios": "^1.6.0",
    "react-hook-form": "^7.48.0",
    "sweetalert2": "^11.10.0",
    "react-hot-toast": "^2.4.0",
    "@stripe/react-stripe-js": "^2.4.0",
    "@stripe/stripe-js": "^2.2.0",
    "recharts": "^2.10.0",
    "react-helmet-async": "^2.0.0",
    "react-icons": "^4.12.0"
  }
}
```

### Server Side
```json
{
  "dependencies": {
    "express": "^4.18.0",
    "mongodb": "^6.3.0",
    "dotenv": "^16.3.0",
    "cors": "^2.8.0",
    "jsonwebtoken": "^9.0.0",
    "bcryptjs": "^2.4.0",
    "cookie-parser": "^1.4.0",
    "stripe": "^14.8.0"
  },
  "devDependencies": {
    "nodemon": "^3.0.0"
  }
}
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- MongoDB account
- Firebase account
- Stripe account

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/localchefbazaar-client.git
cd localchefbazaar-client
```

2. **Install client dependencies**
```bash
npm install
```

3. **Setup environment variables**

Create a `.env` file in the root directory and add your credentials:
```env
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_STRIPE_PUBLIC_KEY=your_stripe_public_key
VITE_API_URL=http://localhost:5000
```
**Note:** Get your Firebase credentials from Firebase Console and Stripe keys from Stripe Dashboard.

4. **Run the development server**
```bash
npm run dev
```

5. **Setup Backend Server**
```bash
git clone https://github.com/yourusername/localchefbazaar-server.git
cd localchefbazaar-server
npm install
```

Create a `.env` file in the server directory:
```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
STRIPE_SECRET_KEY=your_stripe_secret_key
PORT=5000
CLIENT_URL=http://localhost:5173
```
**Note:** Never commit your `.env` file to GitHub. Add it to `.gitignore`.

6. **Run the backend server**
```bash
npm run dev
```

---

## 🔐 Admin Credentials

For testing admin features:
- **Email:** admin@localchef.com
- **Password:** Admin@123

---

## 📱 Core Functionality

### Authentication System
- Secure user registration and login with Firebase
- JWT-based token authentication
- Role-based access control (User, Chef, Admin)
- Protected routes with automatic redirection

### Order Management
- Real-time order status tracking
- Multi-step order flow (Pending → Accepted → Delivered)
- Stripe payment integration
- Order history and payment records

### Review System
- Users can rate and review meals
- Edit and delete own reviews
- Real-time review updates
- Average rating calculation

### Chef Features
- Dynamic Chef ID generation upon approval
- Meal creation with image upload
- Order request management
- Earnings tracking

### Admin Dashboard
- User management with fraud detection
- Request approval system for Chef/Admin roles
- Platform statistics with Recharts visualization
- Complete system oversight

---

## 🎨 Design Features

- **Responsive Design** - Works seamlessly on all devices
- **Smooth Animations** - Powered by Framer Motion
- **Modern UI** - Clean and intuitive interface
- **Color Contrast** - Eye-friendly color scheme
- **Loading States** - Smooth loading indicators
- **Error Handling** - User-friendly error messages

---

## 🔒 Security Features

- JWT token authentication
- HTTP-only cookies for token storage
- Password hashing with Bcryptjs
- Environment variable protection
- CORS configuration
- Protected API endpoints
- Fraud user detection system

---

## 📊 Database Collections

- **users** - User authentication and profiles
- **meals** - Food items and details
- **orders** - Order transactions
- **reviews** - User reviews and ratings
- **favorites** - User favorite meals
- **requests** - Chef/Admin role requests
- **payments** - Payment transaction history

---

## 🌟 Additional Features

- **Pagination** - 10 meals per page on Meals page
- **Sorting** - Sort meals by price (ascending/descending)
- **Search** - Find meals quickly (optional)
- **Dynamic Titles** - Page-specific browser tab titles
- **Axios Interceptors** - Automatic token injection
- **Dark/Light Theme** - Theme toggle (optional)

---

## 📈 Future Enhancements

- [ ] Real-time chat between customers and chefs
- [ ] Advanced search and filtering options
- [ ] Chef analytics dashboard
- [ ] Email notifications
- [ ] Multi-language support
- [ ] Social media integration
- [ ] Mobile application

---


## 👨‍💻 Developer

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)
- Portfolio: [yourportfolio.com](https://yourportfolio.com)

---

## 🙏 Acknowledgments

- Thanks to all the home chefs who inspired this project
- Special thanks to the open-source community
- Icons from React Icons
- Images from Unsplash/Pexels

---

## 📞 Contact

For any queries or support, please reach out:
- Email: contact@localchefbazaar.com
- Website: [www.localchefbazaar.com](https://localchefbazaar.com)

---

<div align="center">
  <p>Made with ❤️ by [Your Name]</p>
  <p>© 2025 LocalChefBazaar. All rights reserved.</p>
</div>