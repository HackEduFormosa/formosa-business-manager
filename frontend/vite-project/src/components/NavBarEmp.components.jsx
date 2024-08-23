// App.js
import React, { useState } from 'react';
import { FaShoppingBag } from 'react-icons/fa';
import NavBar2 from './NavBar2.components';
import { Footer } from './Footer.components';
import imagen1 from '../assets/images/image3.png';

function NavBar() {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <>
    <div className="bg-indigo-900 text-white">
    <header>
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <svg
              className="h-5 w-5 text-gray-400"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.2721 10.2721C16.2721 12.4813 14.4813 14.2721 12.2721 14.2721C10.063 14.2721 8.27214 12.4813 8.27214 10.2721C8.27214 8.06298 10.063 6.27212 12.2721 6.27212C14.4813 6.27212 16.2721 8.06298 16.2721 10.2721ZM14.2721 10.2721C14.2721 11.3767 13.3767 12.2721 12.2721 12.2721C11.1676 12.2721 10.2721 11.3767 10.2721 10.2721C10.2721 9.16755 11.1676 8.27212 12.2721 8.27212C13.3767 8.27212 14.2721 9.16755 14.2721 10.2721Z"
                fill="currentColor"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.79417 16.5183C2.19424 13.0909 2.05438 7.39409 5.48178 3.79417C8.90918 0.194243 14.6059 0.054383 18.2059 3.48178C21.8058 6.90918 21.9457 12.6059 18.5183 16.2059L12.3124 22.7241L5.79417 16.5183ZM17.0698 14.8268L12.243 19.8965L7.17324 15.0698C4.3733 12.404 4.26452 7.97318 6.93028 5.17324C9.59603 2.3733 14.0268 2.26452 16.8268 4.93028C19.6267 7.59603 19.7355 12.0268 17.0698 14.8268Z"
                fill="currentColor"
              />
            </svg>
            <span className="text-sm">Formosa, Argentina.</span>
          </div>
          <div className="flex items-center flex-grow justify-center text-2xl font-semibold space-x-2">
            <FaShoppingBag />
            <span>FormosaEmprende</span>
            <FaShoppingBag />
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                <svg
                  className="h-5 w-5 text-gray-400"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <input
                className="w-full border rounded-md pl-10 pr-4 py-2 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Buscador"
              />
            </div>
            <button
              onClick={() => setCartOpen(!cartOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
            </button>
          </div>
        </div>
        <nav className="mt-4">
          <div className="flex flex-col sm:flex-row sm:justify-center sm:items-center">
            <a
              className="text-white hover:underline sm:mx-3 sm:my-0 my-3"
              href="/noticias"
            >
              Noticias
            </a>
            <a
              className="text-white hover:underline sm:mx-3 sm:my-0 my-3"
              href="/publicar"
            >
              Publicar
            </a>
           
            
          </div>
        </nav>
      </div>
    </header>
    <div className={`fixed right-0 top-0 max-w-xs w-full h-full px-6 py-4 transition-transform duration-300 transform overflow-y-auto bg-white border-l-2 border-gray-300 ${cartOpen ? 'translate-x-0' : 'translate-x-full'}`}>
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-medium text-gray-700">Tu carrito</h3>
        <button
          onClick={() => setCartOpen(!cartOpen)}
          className="text-gray-600 focus:outline-none"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
      <hr className="my-3" />
      {/* Repeat the following block for each cart item */}
      <div className="flex justify-between mt-6">
        <div className="flex">
          <img
            className="h-20 w-20 object-cover rounded"
            src={imagen1}
            alt="Product"
          />
          <div className="mx-3">
            <h3 className="text-lg font-medium text-gray-700">Leche en Polvo</h3>
            <p className="text-gray-500 text-sm">Hecho en Formosa</p>
            <p className="text-gray-700 text-base font-semibold">$12.00</p>
          </div>
        </div>
        <button className="text-red-500 focus:outline-none">
          <svg
            className="h-5 w-5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
      {/* End of cart item block */}
      <hr className="my-3" />
      <div className="flex justify-between">
        <p className="text-lg font-semibold text-gray-700">Total</p>
        <p className="text-lg font-semibold text-gray-700">$12.00</p>
      </div>
      <button className="w-full mt-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
        Reservar ahora
      </button>
    </div>
  </div>
  <NavBar2 />
  <Footer />  
  </>
  );
}

export default NavBar;