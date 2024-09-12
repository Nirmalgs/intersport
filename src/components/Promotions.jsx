import React from 'react';

const Promotions = ({ price, originalPrice, discount, currency, buttonColor, textColor, backgroundColor, summerSale }) => {
  const savedAmount = originalPrice - price;
  const discountPercentage = ((savedAmount / originalPrice) * 100).toFixed(2);

  return (
    <div className={`p-2 rounded-lg shadow-lg ${backgroundColor} text-${textColor}`}>
      <h2 className="text-sm font-semibold mb-0.5">Intersport {summerSale ? `Gold` : `Volume`} price</h2>
      <div className="text-lg font-bold">
        {currency} {price.toFixed(2)} <span className="text-xs font-normal">Incl. VAT</span>
      </div>
      <div className="line-through text-gray-500 text-sm mt-0.5">
        {currency} {originalPrice.toFixed(2)}
      </div>
      <div className="text-orange-600 text-sm font-semibold">
        Save {currency} {savedAmount.toFixed(2)}
      </div>
      <div className="bg-orange-400 text-white text-xs font-bold rounded-md py-1 px-3 inline-block mt-0.5">
        {discountPercentage}% Off
      </div>
      <button
        className={`mt-0.5 py-0.5 px-3 mx-2 rounded-md font-semibold text-white text-sm ${buttonColor} hover:opacity-90 transition-opacity duration-200`}
      >
        {summerSale ? `Summer Sale` : `Volume Discount`}
      </button>
    </div>
  );
};

export default Promotions;
