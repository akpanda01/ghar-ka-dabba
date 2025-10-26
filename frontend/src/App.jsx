import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

const HomePage = () => <div className="container mx-auto p-4">Welcome to FoodApp!</div>;

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      {/* Main content grows to fill available space */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* Add other routes here as you build them */}
          {/* <Route path="/restaurants" element={<RestaurantPage />} /> */}
          {/* <Route path="/cart" element={<CartPage />} /> */}
          {/* <Route path="/login" element={<LoginPage />} /> */}
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;