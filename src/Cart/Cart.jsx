import { Heart, Trash } from 'lucide-react'
import React from 'react'
import cartSlice, { addProduct } from '../Store/cartSlice'
import store from '../Store/Store'
import { useSelector } from 'react-redux';


function Cart() {

  const products = useSelector((state) => state.cart.products);
  console.log(products)
  
  return (
    <div className="px-2 mx-auto max-w-7xl lg:px-0">
      <div className="max-w-2xl py-8 mx-auto lg:max-w-7xl">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Shopping Cart
        </h1>
        <form className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
          <section aria-labelledby="cart-heading" className="bg-white rounded-lg lg:col-span-8">
            <h2 id="cart-heading" className="sr-only">
              Items in your shopping cart
            </h2>
            <ul role="list" className="divide-y divide-gray-200">
              {products.map((product, productIdx) => (
                <div key={product.id} className="">
                  <li key={product.id} className="flex py-6 sm:py-6 ">
                    <div className="flex-shrink-0">
                      <img
                        src={product.thumbnail}
                        alt={product.name}
                        className="object-contain object-center w-24 h-24 rounded-md sm:h-38 sm:w-38"
                      />
                    </div>

                    <div className="flex flex-col justify-between flex-1 ml-4 sm:ml-6">
                      <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                        <div>
                          <div className="flex justify-between">
                            <h3 className="text-sm">
                              <a href={product.href} className="font-semibold text-black">
                                {product.title}
                              </a>
                            </h3>
                          </div>
                          <div className="flex items-end mt-1">
                            <p className="text-xs font-medium text-gray-500 line-through">
                              {product.discountpercentage}
                            </p>
                            <p className="text-sm font-medium text-gray-900">
                              &nbsp;&nbsp;{product.price}
                            </p>
                            &nbsp;&nbsp;
                            <p className="text-sm font-medium text-green-500">{product.discountpercentage}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <div className="flex mb-2">
                    <div className="flex min-w-24">
                      <button type="button" className="h-7 w-7">
                        -
                      </button>
                      <input
                        type="text"
                        className="mx-1 text-center border rounded-md h-7 w-9"
                        defaultValue={1}
                      />
                      <button type="button" className="flex items-center justify-center h-7 w-7">
                        +
                      </button>
                    </div>
                    <div className="flex ml-6 text-sm">
                      <button type="button" className="flex items-center px-2 py-1 pl-0 space-x-1">
                        <Trash size={12} className="text-red-500" />
                        <span className="text-xs font-medium text-red-500">Remove</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </ul>
          </section>
          {/* Order summary */}
          <section
            aria-labelledby="summary-heading"
            className="mt-16 bg-white rounded-md lg:col-span-4 lg:mt-0 lg:p-0"
          >
            <h2
              id="summary-heading"
              className="px-4 py-3 text-lg font-medium text-gray-900 border-b border-gray-200 sm:p-4"
            >
              Price Details
            </h2>
            <div>
              <dl className="px-2 py-4 space-y-1 ">
                <div className="flex items-center justify-between">
                  <dt className="text-sm text-gray-800">Price (3 item)</dt>
                  <dd className="text-sm font-medium text-gray-900">₹ 52,398</dd>
                </div>
                <div className="flex items-center justify-between pt-4">
                  <dt className="flex items-center text-sm text-gray-800">
                    <span>Discount</span>
                  </dt>
                  <dd className="text-sm font-medium text-green-700">- ₹ 3,431</dd>
                </div>
                <div className="flex items-center justify-between py-4">
                  <dt className="flex text-sm text-gray-800">
                    <span>Delivery Charges</span>
                  </dt>
                  <dd className="text-sm font-medium text-green-700">Free</dd>
                </div>
                <div className="flex items-center justify-between py-4 border-dashed border-y ">
                  <dt className="text-base font-medium text-gray-900">Total Amount</dt>
                  <dd className="text-base font-medium text-gray-900">₹ 48,967</dd>
                </div>
              </dl>
              <div className="px-2 pb-4 font-medium text-green-700">
                You will save ₹ 3,431 on this order
              </div>
            </div>
          </section>
        </form>
      </div>
    </div>
  )
}

export default Cart