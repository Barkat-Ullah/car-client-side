import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Prividers/AuthProvider";


const Navbar = () => {
  const {users, logOut} = useContext(AuthContext)

  const handleLogOut = () => {
    logOut()
    .then(() => {})
    .catch(error => console.log(error))
  }

  const nabItems = <>
  <li><Link to='/'>Home</Link></li>
  <li><Link to='/about'>About</Link></li>
  {
    users?.email?
    <>
      <li><Link to='/bookings'>My Bookings</Link></li>
    <li><button onClick={handleLogOut}>Logout</button></li>
    </>
    : <li><Link to='/login'>Login</Link></li>
  }

  
  </>

  return (
    <div>
      <nav className="navbar bg-slate-600 fixed top-0 right-0 left-0">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {nabItems}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {nabItems}
          </ul>
        </div>
        <div className="navbar-end">
        <Link to='/login'>
          <button className="btn btn-primary">Login</button>
        </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
