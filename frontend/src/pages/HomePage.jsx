import React from 'react';
import { Link } from 'react-router-dom';
import heroImageUrl from '../assets/food1.png'; 
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import KitchenCard from '../components/KitchenCard';
import food2 from '../assets/food2.png';
import food3 from '../assets/food3.png';
import food4 from '../assets/food4.png';
import food5 from '../assets/food5.jpg';
import food6 from '../assets/food6.jpg';
import food7 from '../assets/food7.jpg';
import chefImage from '../assets/chef-image.png';

import { FiSearch, FiShoppingCart, FiSmile } from 'react-icons/fi';

const featuredKitchens = [
  {
    id: 1,
    name: "Sunita's Kitchen",
    cuisine: "North Indian",
    rating: 4.5,
    image: food2
  },
  {
    id: 2,
    name: "Aunty's South Delights",
    cuisine: "South Indian",
    rating: 4.8,
    image: food3
  },
  {
    id: 3,
    name: "Raj's Royal Thali",
    cuisine: "Rajasthani",
    rating: 4.6,
    image: food4
  },
  {
    id: 4,
    name: "Bengali Bites",
    cuisine: "Bengali",
    rating: 4.7,
    image: food5
  },
  {
    id: 5,
    name: "Maharaja's Feast",
    cuisine: "Maharashtrian",
    rating: 4.7,
    image: food6
  },
  {
    id: 6,
    name: "Gujrati Ghar",
    cuisine: "Gujarati",
    rating: 4.7,
    image: food7
  },
];

const HomePage = () => {
  const [text] = useTypewriter({
    words: [
      'Fresh, Homemade Meal', 
      'Authentic Home Cooking', 
      'Made with Love',
      'Delivered to Your Doorstep'
    ],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 50,
    delaySpeed: 2000,
  });

  return (
    <div className="flex flex-col">

      {/* --- Hero Section (Split Screen) --- */}
      <section className="bg-orange-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="flex flex-col md:flex-row items-center">
            
            {/* --- Left Side: Text Content --- */}
            <div className="md:w-1/2 text-center md:text-left mb-12 md:mb-0">
              <h1 className="text-4xl md:text-6xl font-bold text-orange-900 mb-4 h-28 md:h-40">
                <span>{text}</span>
                <Cursor cursorColor="#F97316" />
              </h1>
              <p className="text-lg md:text-2xl text-gray-700 mb-8">
                Discover authentic meals from home chefs in your neighborhood.
              </p>
              <Link 
                to="/kitchens" 
                className="inline-block bg-orange-500 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-orange-600 transition-colors shadow-lg"
              >
                Browse Home Kitchens
              </Link>
            </div>

            {/* --- Right Side: Image --- */}
            <div className="md:w-1/2 flex justify-center">
              <img 
                src={heroImageUrl} 
                alt="Homemade food" 
                className="rounded-lg shadow-2xl w-full max-w-md"
              />
            </div>

          </div>
        </div>
      </section>
      
      {/* ---"FEATURED KITCHENS" SECTION --- */}
      <section className="py-16 bg-orange-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-orange-100 mb-12">
            Featured Home Kitchens
          </h2>
          
          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredKitchens.map(kitchen => (
              <KitchenCard key={kitchen.id} kitchen={kitchen} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/kitchens"
              className="bg-orange-500 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-orange-600 transition-colors"
            >
              View All Kitchens
            </Link>
          </div>
        </div>
      </section>

      {/* ---"HOW IT WORKS" SECTION --- */}
      <section className="py-16 bg-orange-50"> {/* Alternating background color */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-orange-900 mb-12">
            How It Works
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            
            {/* Step 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <FiSearch className="text-5xl text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                1. Browse Kitchens
              </h3>
              <p className="text-gray-600">
                Explore a variety of home chefs and authentic cuisines near you.
              </p>
            </div>
            
            {/* Step 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <FiShoppingCart className="text-5xl text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                2. Place Your Order
              </h3>
              <p className="text-gray-600">
                Add your favorite homemade meals to the cart and checkout securely.
              </p>
            </div>
            
            {/* Step 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <FiSmile className="text-5xl text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                3. Enjoy Your Meal
              </h3>
              <p className="text-gray-600">
                Get fresh, hot food delivered right to your doorstep.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ---"BECOME A CHEF" SECTION --- */}
      <section className="py-16 bg-orange-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            
            {/* Left Side: Image */}
            <div className="md:w-1/2 flex justify-center">
              <img 
                src={chefImage} 
                alt="Happy home chef" 
                className="rounded-lg w-full max-w-md"
              />
            </div>

            {/* Right Side: Text Content */}
            <div className="md:w-1/2 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-orange-50 mb-4">
                Turn Your Passion into Profit
              </h2>
              <p className="text-lg text-orange-50 mb-8">
                Are you a homemaker who loves to cook? Share your authentic recipes with the world. Set your own schedule, cook from your own kitchen, and earn money doing what you love.
              </p>
              <Link 
                to="/register-chef" 
                className="inline-block bg-orange-100 text-orange-900 px-8 py-3 rounded-md text-lg font-medium hover:bg-green-700 transition-colors shadow-lg"
              >
                Start Selling Today
              </Link>
            </div>
            
          </div>
        </div>
      </section>

    </div>
  );
};

export default HomePage;