import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Heart, Share } from 'lucide-react';
import { addProduct, removeProduct } from '../Store/cartSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import Dropdown from '../Header/Dropdown.jsx';

const useFetchProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { products, loading, error };
};

const ProductCard = React.memo(({ product, onAddToCart }) => (
  <div className="flex flex-col justify-between p-6 bg-white rounded-lg shadow-md">
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
        onClick={() => onAddToCart(product)}
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
));

function Products() {
  const { products, loading, error } = useFetchProducts();
  const [selectedCategory, setSelectedCategory] = useState('All Products');
  const dispatch = useDispatch();
  const notify = () => toast.success('Item added to the cart!', {
    position: "top-right",
    autoClose: 8000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });

  const addToCartHandler = useCallback((product) => {
    dispatch(addProduct(product));
    notify();
  }, [dispatch]);

  const handleCategorySelect = useCallback((category) => {
    setSelectedCategory(category);
  }, []);

  const filteredProducts = selectedCategory === 'All Products' 
    ? products 
    : products.filter(product => product.category.toLowerCase() === selectedCategory.toLowerCase());

  if (loading) {
    return (
      <div className="grid grid-cols-1 gap-6 p-2 md:grid-cols-2 lg:grid-cols-4 lg:p-6">
        {[...Array(8)].map((_, index) => (
          <Skeleton key={index} height={300} />
        ))}
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <div className="flex items-center justify-center h-20 mb-4">
        <Dropdown onSelect={handleCategorySelect} />
      </div>
      
      <div className="grid grid-cols-1 gap-6 p-2 md:grid-cols-2 lg:grid-cols-4 lg:p-6">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={addToCartHandler}
          />
        ))}
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default Products;
