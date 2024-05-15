import React, { useState, useEffect } from 'react';
import { Heart, Share } from 'lucide-react';
import { addProduct,removeProduct } from '../Store/cartSlice';
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch()
  const notify = () => toast.success('Item added to the cart!', {
    position: "top-center",
    autoClose: 8000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data.products);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);


  if (loading) return <div>Loading....</div>;
  if (error) return <div>Error: {error}</div>;
  

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
      {products.map(product => (
        <div key={product.id} className="flex flex-col justify-between p-6 bg-white rounded-lg shadow-md">
          <div className="mb-6">
            <div className="flex items-center justify-center mb-4">
              <img
                alt={`Product gallery ${product.id}`}
                src={product.thumbnail}
                className="object-cover w-full h-48 rounded-md"
              />
            </div>
            <div className="pb-5">
              <h2 className="text-xl font-semibold">{product.title}</h2>
              <p className="mt-2 text-gray-600">${product.price}</p>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-semibold">Product Details:</h3>
              <p className="text-sm text-gray-700">{product.description}</p>
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <button
              type="button"
              className="px-4 py-2 text-sm font-semibold text-white bg-black rounded-md hover:bg-gray-800"
              aria-label="Add to Cart"
              onClick={notify}
            >
              Add To Cart
            </button>
            <div className="flex justify-between space-x-2">
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 text-sm font-semibold text-white bg-black rounded-md hover:bg-gray-800"
                aria-label="Add to Wishlist"
              >
                Wishlist
              </button>
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 text-sm font-semibold text-white bg-black rounded-md hover:bg-gray-800"
                aria-label="Share Product"
              >
                Share
              </button>
            </div>
          </div>
        </div>
      ))}
      {<ToastContainer position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition: Bounce />}
    </div>
  );
}  

export default Products;
