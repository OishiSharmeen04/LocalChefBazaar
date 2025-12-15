import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Navbar = () => {
  const { user, logoutUser } = useAuth();

  return (
    <div className="navbar bg-base-100 shadow">
      <div className="flex-1">
        <Link to="/" className="text-xl font-bold">
          LocalChefBazaar
        </Link>
      </div>

      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/meals">Meals</Link>

        {user ? (
          <>
            <Link to="/dashboard">Dashboard</Link>
            <button onClick={logoutUser} className="btn btn-sm">
              Logout
            </button>
            <img
              src={user.photoURL || "https://i.ibb.co/2kR5zq0/user.png"}
              className="w-8 rounded-full"
            />
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
