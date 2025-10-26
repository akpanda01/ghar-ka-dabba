import React from 'react';
import KitchenCard from '../components/KitchenCard';

// --- Import your images ---
import food2 from '../assets/food2.png';
import food3 from '../assets/food3.png';
import food4 from '../assets/food4.png';
import food5 from '../assets/food5.jpg';
import food6 from '../assets/food6.jpg';
import food7 from '../assets/food7.jpg';
import food8 from '../assets/food8.jpg';
import food9 from '../assets/food9.jpg';

// We can use a larger mock data list here
const allKitchens = [
  { id: 1, name: "Sunita's Kitchen", cuisine: "North Indian, Punjabi", rating: 4.5, image: food2 },
  { id: 2, name: "Aunty's South Delights", cuisine: "South Indian, Dosa", rating: 4.8, image: food3 },
  { id: 3, name: "Raj's Royal Thali", cuisine: "Rajasthani, Thali", rating: 4.6, image: food4 },
  { id: 4, name: "Bengali Bites", cuisine: "Bengali, Fish", rating: 4.7, image: food5 },
  { id: 5, name: "Paratha Point", cuisine: "North Indian, Breads", rating: 4.3, image: food8 },
  { id: 6, name: "Mumbai Magic", cuisine: "Maharashtrian, Vada Pav", rating: 4.9, image: food9 },
];

const KitchensPage = () => {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-orange-900">
            Discover Home Kitchens
          </h1>
          <p className="text-lg text-gray-600 mt-2">
            Find the perfect homemade meal from a chef near you.
          </p>
        </div>

        {/* Search & Filter Bar (We'll make this functional later) */}
        <div className="mb-8 p-4 bg-orange-50 rounded-lg shadow-sm flex flex-col md:flex-row gap-4">
          <input 
            type="text" 
            placeholder="Search by food or kitchen name..." 
            className="flex-grow p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <select 
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            <option value="">Filter by Cuisine</option>
            <option value="north-indian">North Indian</option>
            <option value="south-indian">South Indian</option>
            <option value="rajasthani">Rajasthani</option>
            <option value="bengali">Bengali</option>
          </select>
          <button className="bg-orange-500 text-white px-6 py-3 rounded-md font-medium hover:bg-orange-600">
            Search
          </button>
        </div>

        {/* Kitchens Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allKitchens.map(kitchen => (
            <KitchenCard key={kitchen.id} kitchen={kitchen} />
          ))}
        </div>

      </div>
    </div>
  );
};

export default KitchensPage;