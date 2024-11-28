import React, { useState } from 'react';

const PriceSlider = ({ minPrice = 0, maxPrice = 1000, onApply }) => {
  const [selectedPrice, setSelectedPrice] = useState(minPrice);

  const handleChange = (e) => {
    const value = Number(e.target.value);
    setSelectedPrice(value);
  };

  return (
    <div className="bg-gray-100 p-4 rounded shadow">
      <h3 className="text-lg font-semibold mb-2">Filter by Price</h3>
      <div className="flex items-center space-x-4">
        <input
          type="range"
          min={minPrice}
          max={maxPrice}
          value={selectedPrice}
          onChange={handleChange}
          className="w-full"
        />
      </div>
      <div className="mt-2 text-sm text-gray-600">
        <span>Min Price: ${selectedPrice}</span>
      </div>
      <button
        onClick={() => onApply(selectedPrice)}
        className="mt-4 bg-gray-800 text-white px-4 py-2 rounded"
      >
        Apply
      </button>
    </div>
  );
};

export default PriceSlider;
