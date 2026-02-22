import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-black text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold">E-Commerce</h1>

      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </div>
  );
};

export default Navbar;
