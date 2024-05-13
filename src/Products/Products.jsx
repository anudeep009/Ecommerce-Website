import React, { useState, useEffect } from 'react';
import { Heart, Share } from 'lucide-react';

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="grid items-center w-full px-2 py-10 mx-auto space-y-4 max-w-7xl md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
      {products.map(product => (
            <div key={product.id} className="mb-6 md:mb-8 lg:mb-0">
              <div className="flex items-center justify-center mb-6 md:mb-8">
                <img
                  alt={`Product gallery ${product.id}`}
                  src={product.thumbnail}
                  width={650}
                  height={590}
                  className="aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[300px] lg:h-[200px]"
                />
              </div>
              <div className="pb-5">
                <h2 className="text-lg font-semibold md:text-xl xl:text-2xl">{product.title}</h2>
                <p className="mt-4 font-semibold">${product.price}</p>
              </div>
              <div>
                <h3 className="text-15px mb-3 font-semibold sm:text-base lg:mb-3.5">
                  Product Details:
                </h3>
                <p className="text-sm">
                  {product.description}
                </p>
              </div>
              <div className="pb-2" />
              <div className="space-y-2.5 pt-1.5 md:space-y-3.5 lg:pt-3 xl:pt-4">
                <button
                  type="button"
                  className="w-full px-3 py-2 text-sm font-semibold text-white bg-black rounded-md shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Add To Cart
                </button>
                <div className="grid grid-cols-2 gap-2.5">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center px-3 py-2 text-sm font-semibold text-white bg-black rounded-md shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    <Heart size={16} className="mr-3" />
                    <span className="block">Wishlist</span>
                  </button>
                  <div className="relative">
                    <button
                      type="button"
                      className="inline-flex items-center justify-center w-full px-3 py-2 text-sm font-semibold text-white bg-black rounded-md shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      <Share size={16} className="mr-3" />
                      <span className="block">Share</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
  )
}


export default Products;
