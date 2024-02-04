import {
    FaFacebookF,
    FaTwitter,
    FaLinkedinIn,
    FaGooglePlusG,
  } from "react-icons/fa";
  import { FaRegCircleUser } from "react-icons/fa6";
  
  const Footer = () => {
    return (
      <div className="bg-gray-800 border-t-2">
        <div className="relative z-10">
          <footer className="footer p-10 text-base-content">
            <aside>
              <img
                className="w-20"
                src="https://i.ibb.co/9ZDVRzh/logo.png"
                alt=""
              />
              <p className=" font-semibold">
                <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent font-bold text-4xl">
                Strom Scope
                </span>
              </p>
              <p className="text-gray-400">Connect to weather online report</p>
            </aside>
            <nav className="text-gray-400">
              <header className="footer-title text-blue-300">About</header>
              <a className="link link-hover mb-2">Home</a>
              <a className="link link-hover mb-2">About us</a>
              <a className="link link-hover mb-2">Contact</a>
              <a className="link link-hover mb-2">FAQ</a>
            </nav>
            <nav className="text-gray-400">
              <header className="footer-title text-blue-300">Usefull Links</header>
              <a className="link link-hover mb-2">Blog</a>
              <a className="link link-hover mb-2">About us</a>
              <a className="link link-hover mb-2">Refund policy</a>
              <a className="link link-hover mb-2">Terms & conditions</a>
              <a className="link link-hover">Privacy policy</a>
            </nav>
            <nav className="text-gray-400">
              <header className="footer-title text-blue-300">Legal</header>
              <a className="link link-hover mb-2">Terms of use</a>
              <a className="link link-hover mb-2">Privacy policy</a>
              <a className="link link-hover mb-2">Cookie policy</a>
            </nav>
            <nav className="text-blue-300">
              <header className="footer-title">Newsletter</header>
              <a className="link link-hover text-gray-400">Sign up for our newsletter</a>
              <input
                className=" bg-gray-50 p-2 mb-2 rounded-md w-full text-sm focus:outline-none focus:border-blue-400 transition duration-300 ease-in-out hover:border-blue-600"
                type="text"
                name="password"
                placeholder="Enter your email"
              />
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 font-semibold p-2 rounded-md text-white w-full mb-3">
                SUBSCRIBE
              </button>
            </nav>
          </footer>

          <div className="flex justify-between items-center px-10 border-t pt-2 border-gray-500">
         <div className="flex items-center gap-2">
         <FaRegCircleUser className="text-blue-400"></FaRegCircleUser>
          <p className="text-gray-400 text-sm text-center font-semibold">
            Powered By{" "}
            <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
              Rahul Sutradhar
            </span>{" "}
            Strom Scope © 2024
          </p>
         </div>

          <div className="flex gap-3 justify-center items-center">
            <p className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent font-semibold">
              Follow us :
            </p>
            <button className="w-6 h-6 rounded-full bg-blue-700 text-white flex justify-center items-center transform duration-300 hover:bg-blue-500 ">
              <FaFacebookF></FaFacebookF>
            </button>
            <button className="w-6 h-6 rounded-full bg-blue-500 text-white flex justify-center items-center transform duration-300 hover:bg-blue-700 ">
              <FaTwitter></FaTwitter>
            </button>
            <button className="w-6 h-6 rounded-full bg-blue-800 text-white flex justify-center items-center transform duration-300 hover:bg-blue-600 ">
              <FaLinkedinIn></FaLinkedinIn>
            </button>
            <button className="w-6 h-6 rounded-full bg-red-500 text-white flex justify-center items-center transform duration-300 hover:bg-red-700 ">
              <FaGooglePlusG></FaGooglePlusG>
            </button>
          </div>
          </div>
          
          <br />
          {/* <img src="/src/assets/images/1.png" alt="" /> */}
        </div>
      </div>
    );
  };
  
  export default Footer;
  