import React from 'react';
import { Link } from 'react-router-dom';
import { FiStar } from 'react-icons/fi'; 

const KitchenCard = ({ kitchen }) => {
  const { id, name, cuisine, rating, image } = kitchen;

  return (
    <Link 
      to={`/kitchens/${id}`} 
      className="block bg-orange-100 rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
    >
      {/* Card Image */}
      <img 
        src={image} 
        alt={name} 
        className="w-full h-48 object-cover" 
      />
      
      {/* Card Content */}
      <div className="p-4">
        <h3 className="text-xl font-bold text-orange-900 mb-1">{name}</h3>
        <p className="text-sm text-black mb-2">{cuisine}</p>
        
        {/* Rating */}
        <div className="flex items-center">
          <FiStar className="text-yellow-500 mr-1" />
          <span className="text-gray-700 font-medium">{rating}</span>
          <span className="text-gray-500 text-sm ml-1">(10+ ratings)</span>
        </div>
      </div>
    </Link>
  );
};

export default KitchenCard;