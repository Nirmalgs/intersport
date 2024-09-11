'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import productImage from '../../public/images/product-image.webp';
import Link from 'next/link';
import { FavoriteIcon } from './Icons/FavoriteIcon';
import ProductCard from './ProductCard';
import { wishlistAtom } from '@/atoms/wishlist';
import { useAtom } from 'jotai';

const ProductList = () => {
  const [productListItem, setProductListItem] = useState([]);
  const [activeProductId, setActiveProductId] = useState(null);
  const [wishlist, setWishlist] = useAtom(wishlistAtom);
  const [viewMode, setViewMode] = useState('grid');

  console.log(wishlist, 'wishlist');
  useEffect(() => {
    fetch('http://51.20.115.140/api/getProducts')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProductListItem(data);
      });
  }, []);

  const handleProductClick = (product) => {
    setWishlist((prevProducts) => {
      const exists = prevProducts.some((item) => item.productId === product.productId);
      if (exists) {
        // Remove the product if it's already in the wishlist
        return prevProducts.filter((item) => item.productId !== product.productId);
      } else {
        // Add the product if it's not in the wishlist
        return [...prevProducts, product];
      }
    });
  };

  const handleViewChange = (mode) => {
    setViewMode(mode);
  };

  return (
    <>
      <div className="flex justify-between items-center">
        <h2 className="text-[#1f2533] font-bold text-[18px] my-[30px]">Mens Tops & Tees</h2>
        <div className="flex">
          <button
            onClick={() => handleViewChange('grid')}
            className={`p-2 ${viewMode === 'grid' ? 'bg-primaryColor text-white' : ''}`}
          >
            Grid
          </button>
          <button
            onClick={() => handleViewChange('list')}
            className={`p-2 ${viewMode === 'list' ? 'bg-primaryColor text-white' : ''}`}
          >
            List
          </button>
        </div>
        <div className="">
          <label htmlFor="sort" className="text-gray-800">
            Sort by:
          </label>
          <select
            name="sort"
            id="sort"
            className="bg-white border border-gray-300 rounded px-[10px] py-[5px] ml-[10px]"
          >
            <option value="Best selling">Best selling</option>
            <option value="Alphabetically, A-Z">Alphabetically, A-Z</option>
            <option value="Alphabetically, Z-A">Alphabetically, Z-A</option>
            <option value="price">Price, low to high</option>
            <option value="price">Price, high to low</option>
          </select>
        </div>
      </div>
      <ul className="flex flex-wrap gap-[25px] productlist-container">
        {productListItem?.data?.items.map((product) => (
          <>
            {viewMode === 'grid' && (
              <ProductCard
                product={product}
                activeProductId={wishlist}
                handleProductClick={handleProductClick}
              />
            )}
            {viewMode === 'list' && (
              <li key={product.name} className="product-list-item bg-white w-full">
                <div className="border-2 border-zinc-50 rounded relative flex">
                  <span
                    onClick={() => handleProductClick(product)}
                    className={`absolute top-[10px] right-[6px] z-[9] inline-block w-[35px] h-[35px] favorite-icon cursor-pointer
                    ${wishlist.includes(product.productId) ? 'active' : ''}`}
                  >
                    <FavoriteIcon  />
                  </span>
                  <div className="product-card p-[20px] relative w-[30%]">
                    <Link href={`/productlist/${product?.productId}`}>
                      <Image
                        src={product?.thumbnail}
                        alt={product.name}
                        width={225}
                        height={225}
                        className="w-full h-[220px]"
                      />
                    </Link>
                  </div>
                  <div className="p-[20px] w-[70%]">
                    <Link href={`/productlist/${product?.productId}`}>
                      <h4 className="h-[48px] product-name text-[15px] text-gray-800 font-semibold">{product.name}</h4>
                    </Link>
                    <p className="font-semibold text-[14px]">
                      <span dangerouslySetInnerHTML={{__html:product.description}}></span></p>
                  </div>
                </div>
              </li>
            )}
          </>
        ))}
      </ul>
    </>
  );
};

export default ProductList;
