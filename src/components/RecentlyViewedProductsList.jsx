'use client';
import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { useAtom } from 'jotai';
import { wishlistAtom } from '@/atoms/wishlist';

const RecentlyViewedProducts = () => {
  const [recentlyViewed, setRecentlyViewed] = useState([]);
  const [wishlist, setWishlist] = useAtom(wishlistAtom);


  useEffect(() => {
    const storedProducts = localStorage.getItem('recentlyViewed');
    if (storedProducts) {
      setRecentlyViewed(JSON.parse(storedProducts));
    }
  }, []);

  const handleProductClick = (productId) => {
    setWishlist((prevIds) => {
      if (prevIds.includes(productId)) {
        // Remove the item if it's already in the wishlist
        return prevIds.filter((id) => id !== productId);
      } else {
        // Add the item if it's not in the wishlist
        return [...prevIds, productId];
      }
    });
  };

  return (
    <>
      <div className="flex justify-center p-6">
      <div className="flex space-x-12 overflow-x-auto">
       
        
        {/* Card 3 */}
        <div className="flex-shrink-0  bg-white border border-gray-400 rounded-lg shadow-md hover:border-gray-600 transition-all duration-300">
          <div className="p-4">
            <div className="text-[#1f2533] font-bold text-[28px] text-center">Update since you downloaded last time</div>
          </div>
        </div>
      </div>
    </div>  
        

    <div className="flex justify-center p-6">
      <div className="flex space-x-6 overflow-x-auto">
        {/* Card 1 */}
        <div className="flex-shrink-0 w-60 bg-white border border-gray-400 rounded-lg shadow-md hover:border-gray-600 transition-all duration-300">
          <div className="p-4">
            <div className="text-[#1f2533] font-bold text-[28px] text-center">Christmas Promotions</div>
          </div>
        </div>
        
        {/* Card 2 */}
        <div className="flex-shrink-0 w-60 bg-white border border-gray-400 rounded-lg shadow-md hover:border-gray-600 transition-all duration-300">
          <div className="p-4">
            <div className="text-[#1f2533] font-bold text-[28px] text-center">Summer Sale</div>
          </div>
        </div>
        
        {/* Card 3 */}
        <div className="flex-shrink-0 w-60 bg-white border border-gray-400 rounded-lg shadow-md hover:border-gray-600 transition-all duration-300">
          <div className="p-4">
            <div className="text-[#1f2533] font-bold text-[28px] text-center">Recently Downloaded</div>
          </div>
        </div>
      </div>
    </div>
    <div className="flex justify-center p-6">
      <div className="flex space-x-6 overflow-x-auto">
        {/* Card 1 */}
        <div className="flex-shrink-0 w-60 bg-white border border-gray-400 rounded-lg shadow-md hover:border-gray-600 transition-all duration-300">
          <div className="p-4">
            <div className="text-[#1f2533] font-bold text-[28px] text-center">My Lists</div>
          </div>
        </div>
        
        {/* Card 2 */}
        <div className="flex-shrink-0 w-60 bg-white border border-gray-400 rounded-lg shadow-md hover:border-gray-600 transition-all duration-300">
          <div className="p-4">
            <div className="text-[#1f2533] font-bold text-[28px] text-center">Updated in last 30 days</div>
          </div>
        </div>
        
        {/* Card 3 */}
      </div>
    </div>
    <div className="flex justify-center p-6">
      <div className="flex space-x-6 overflow-x-auto">
        {/* Card 1 */}
        <div className="flex-shrink-0 w-60 bg-white border border-gray-400 rounded-lg shadow-md hover:border-gray-600 transition-all duration-300">
          <div className="p-4">
            <div className="text-[#1f2533] font-bold text-[28px] text-center">Shoes</div>
          </div>
        </div>
        
        {/* Card 2 */}
        <div className="flex-shrink-0 w-60 bg-white border border-gray-400 rounded-lg shadow-md hover:border-gray-600 transition-all duration-300">
          <div className="p-4">
            <div className="text-[#1f2533] font-bold text-[28px] text-center">Tshirts</div>
          </div>
        </div>
        
        {/* Card 3 */}
        <div className="flex-shrink-0 w-60 bg-white border border-gray-400 rounded-lg shadow-md hover:border-gray-600 transition-all duration-300">
          <div className="p-4">
            <div className="text-[#1f2533] font-bold text-[28px] text-center">Kids Collections</div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default RecentlyViewedProducts;
