import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "./provider/AuthProvider";
import userIcon from '../assets/user.png'

const Navbar = () => {
  const {user, logOut,} = useContext(AuthContext)
  console.log(user)

    const links = <div className="font-bold flex text-xl">
    <li><NavLink to={'/'}>Home</NavLink></li>
    <li><NavLink to={'/donationCam'}>Donation</NavLink></li>
    <li><NavLink to={'/help'}>How to Help</NavLink></li>
    <li><NavLink to={'/dashboard'}>Dashboard</NavLink></li>
    <li><NavLink to={'/auth/register'}>Register</NavLink></li>
    </div>
    return (
        <div>
            <div className="navbar bg-base-100 justify-between">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <a className="btn btn-ghost text-2xl bg-green-500 text-red-600">BDCOT</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {links}
    </ul>
  </div>
  
  <div className="logo flex gap-2 items-center">
                <div className="">
                    {
                        user && user?.email ?
                            <div>
                                <img className="w-10 rounded-full" src={user.photoURL} alt="profile photo" />
                                <p>{user?.displayName}</p>
                            </div>
                            :
                            <img src={userIcon} alt="icon" />
                    }

                </div>
                {
                    user && user.email ?
                        <button onClick={logOut} className="btn btn-neutral rounded-none">log-Out</button>
                        :
                        <Link to={'/auth/login'} className="btn btn-neutral rounded-none">Login</Link>

                }
            </div>
</div>
        </div>
    );
};

export default Navbar;