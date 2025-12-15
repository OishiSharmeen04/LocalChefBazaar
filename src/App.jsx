import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';
import Navbar from './components/shared/Navbar';
import Footer from './components/shared/Footer';
import Loading from './components/shared/Loading';
import ErrorPage from './components/shared/ErrorPage';
import PrivateRoute from './routes/PrivateRoute';

// Pages
import Home from './pages/Home';
import Meals from './pages/Meals';
import MealDetails from './pages/MealDetails';
import Login from './pages/Login';
import Register from './pages/Register';
import OrderPage from './pages/OrderPage';
import PaymentSuccess from './pages/PaymentSuccess';

// Dashboard Pages
import Dashboard from './pages/Dashboard';
import MyProfile from './components/Dashboard/User/MyProfile';
import MyOrders from './components/Dashboard/User/MyOrders';
import MyReviews from './components/Dashboard/User/MyReviews';
import FavoriteMeals from './components/Dashboard/User/FavoriteMeals';
import CreateMeal from './components/Dashboard/Chef/CreateMeal';
import MyMeals from './components/Dashboard/Chef/MyMeals';
import OrderRequests from './components/Dashboard/Chef/OrderRequests';
import ManageUsers from './components/Dashboard/Admin/ManageUsers';
import ManageRequests from './components/Dashboard/Admin/ManageRequests';
import PlatformStats from './components/Dashboard/Admin/PlatformStats';

function App() {
  const { loading } = useAuth();

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/meals" element={<Meals />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          {/* Private Routes */}
          <Route path="/meal/:id" element={<PrivateRoute><MealDetails /></PrivateRoute>} />
          <Route path="/order/:id" element={<PrivateRoute><OrderPage /></PrivateRoute>} />
          <Route path="/payment-success" element={<PrivateRoute><PaymentSuccess /></PrivateRoute>} />
          
          {/* Dashboard Routes */}
          <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>}>
            <Route index element={<MyProfile />} />
            <Route path="profile" element={<MyProfile />} />
            <Route path="my-orders" element={<MyOrders />} />
            <Route path="my-reviews" element={<MyReviews />} />
            <Route path="favorites" element={<FavoriteMeals />} />
            
            {/* Chef Routes */}
            <Route path="create-meal" element={<CreateMeal />} />
            <Route path="my-meals" element={<MyMeals />} />
            <Route path="order-requests" element={<OrderRequests />} />
            
            {/* Admin Routes */}
            <Route path="manage-users" element={<ManageUsers />} />
            <Route path="manage-requests" element={<ManageRequests />} />
            <Route path="stats" element={<PlatformStats />} />
          </Route>
          
          {/* 404 */}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;