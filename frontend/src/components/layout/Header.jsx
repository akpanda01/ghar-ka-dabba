import React, { useState } from 'react'; // Import useState
import { Link } from 'react-router-dom';
import { FiShoppingCart, FiMenu, FiX } from 'react-icons/fi'; // Import menu icons
import AppLogo from '../../assets/logo-ghar.png'; 

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu
  const cartItemCount = 0; 
  const isAuthenticated = false; 

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className="bg-orange-100 shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="text-2xl font-bold text-orange-900 flex items-center">
                <img src={AppLogo} alt="Ghar ka dabba Logo" className="h-10 w-auto mr-2" />
                Ghar Ka Dabba
              </Link>
            </div>

            {/* Main Navigation */}
            <nav className="hidden md:flex md:space-x-4">
              <Link to="/" className="font-medium text-orange-900 border-b border-transparent hover:border-orange-800 hover:text-orange-500 transition-colors">
                Home
              </Link>
              <Link to="/about" className="font-medium text-orange-900 border-b border-transparent hover:border-orange-800 hover:text-orange-500 transition-colors">
                About
              </Link>
              <Link to="/kitchens" className="font-medium text-orange-900 border-b border-transparent hover:border-orange-800 hover:text-orange-500 transition-colors">
                Kitchens
              </Link>
            </nav>

            {/* Right-side actions (Desktop) */}
            <div className="hidden md:flex items-center space-x-4">
              <Link to="/cart" className="flex items-center space-x-1 text-orange-700 hover:text-orange-500 transition-colors">
                <FiShoppingCart className="h-5 w-5" />
                <span className="font-medium">Cart ({cartItemCount})</span>
              </Link>
              
              {isAuthenticated ? (
                <div><span className="font-medium text-orange-900">My Profile</span></div>
              ) : (
                <>
                  <Link to="/register-chef" className="hidden sm:block bg-orange-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-orange-700 transition-colors text-center">
                    Become a Chef
                  </Link>
                  <Link to="/login" className="bg-orange-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-orange-700 transition-colors">
                    Login
                  </Link>
                </>
              )}
            </div>

            {/* --- Mobile Menu Button --- */}
            <div className="md:hidden flex items-center">
              {/* Cart icon for mobile */}
              <Link to="/cart" className="flex items-center space-x-1 text-orange-800 hover:text-orange-500 transition-colors mr-4">
                <FiShoppingCart className="h-5 w-5" />
                <span className="bg-orange-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              </Link>
              {/* Hamburger Icon */}
              <button onClick={toggleMobileMenu} className="text-orange-900">
                {isMobileMenuOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* --- Mobile Menu (The "Right Bar") --- */}
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onClick={toggleMobileMenu}
      ></div>

      {/* Menu Content */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-orange-50 shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Close Button Inside */}
        <div className="flex justify-end p-4">
          <button onClick={toggleMobileMenu} className="text-orange-900">
            <FiX className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Nav Links */}
        <nav className="flex flex-col space-y-4 p-4">
          <Link to="/" onClick={toggleMobileMenu} className="font-medium text-lg text-orange-900 hover:text-orange-600">
            Home
          </Link>
          <Link to="/about" onClick={toggleMobileMenu} className="font-medium text-lg text-orange-900 hover:text-orange-600">
            About
          </Link>
          <Link to="/kitchens" onClick={toggleMobileMenu} className="font-medium text-lg text-orange-900 hover:text-orange-600">
            Kitchens
          </Link>
          
          <hr className="border-orange-200" />
          
          {/* Mobile Auth Buttons */}
          {isAuthenticated ? (
            <div>
              <Link to="/profile" onClick={toggleMobileMenu} className="font-medium text-lg text-orange-900 hover:text-orange-600">
                My Profile
              </Link>
              {/* Add Logout button here */}
            </div>
          ) : (
            <>
              <Link to="/register-chef" onClick={toggleMobileMenu} className="w-full text-center bg-orange-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-orange-700 transition-colors">
                Become a Chef
              </Link>
              <Link to="/login" onClick={toggleMobileMenu} className="w-full text-center bg-orange-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-orange-700 transition-colors">
                Login
              </Link>
            </>
          )}
        </nav>
      </div>
    </>
  );
};

export default Header;