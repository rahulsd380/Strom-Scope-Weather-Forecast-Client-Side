import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import SideBarDrawer from "../SideBarDrawer/SideBarDrawer";
import UserDropdownMenu from "../UserDropdownMenu/UserDropdownMenu";

const Navbar = () => {
    const {user} = useContext(AuthContext);


  return (
    <div className="px-5 shadow-lg border-b md:shadow-none md:border-none top-0 py-3">
      <div className="flex justify-between items-center gap-2 ">
        <SideBarDrawer></SideBarDrawer>
        <div className="flex items-center gap-3">
          <img
            className="w-10"
            src="https://i.ibb.co/9ZDVRzh/logo.png"
            alt=""
          />
          <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
            Strom Scope
          </h1>
        </div>

        <div className="flex items-center gap-7">
        <div className="hidden lg:flex md:items-center md:gap-8">
          <Link
            to={"/"}
            className="hover:text-blue-400 transition duration-300 text-gray-500 font-semibold "
          >
            Home
          </Link>
          <Link
            to={"/aboutUs"}
            className="hover:text-blue-400 transition duration-300 text-gray-500 font-semibold "
          >
            About Us
          </Link>

          <Link
            to={"/blogs"}
            className="hover:text-blue-400 transition duration-300 text-gray-500 font-semibold "
          >
            Blog
          </Link>
          <Link
            to="faq"
            className="hover:text-blue-400 transition duration-300 text-gray-500 font-semibold "
          >
            FAQ
          </Link>

            <Link
            to={"/allUser"}
            className="hover:text-blue-400 transition duration-300 text-gray-500 font-semibold "
          >
            Manage User
          </Link>
        </div>


        <div className="flex items-center">
          {!user ? (
            <div className="hidden md:flex gap-5">
              <Link to={"/signin"}>
                <button className="text-blue-400 border border-blue-400 font-semibold  rounded-md hover:bg-blue-400 transition duration-300 hover:text-white px-6 py-2">
                  Sign In
                </button>
              </Link>

              <Link to={"/signup"}>
                <button className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 font-semibold border-blue-400 rounded-md py-2 px-6 hover:from-blue-500 hover:to-cyan-500">
                  Sign Up
                </button>
              </Link>
            </div>
          ) : (
            ""
          )}

          {user ? (
            <div>
              <UserDropdownMenu></UserDropdownMenu>
            </div>
          ) : (
            ""
          )}
        </div>
        </div>

        
      </div>
    </div>
  );
};

export default Navbar;
