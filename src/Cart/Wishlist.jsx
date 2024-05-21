import React from 'react'
import { X } from 'lucide-react'

const products = [];

export function Wishlist() {
  return (
    <div
      className="w-screen max-w-sm p-4 pt-4 m-auto my-6 border border-gray-200 rounded-lg shadow-sm sm:p-6 lg:p-8"
      aria-modal="true"
      role="dialog"
      tabIndex={-1}
    >
      <div className="mt-6 space-y-6">
        <ul className="space-y-4">
          {products.map((product) => (
            <li key={product.id} className="flex items-center gap-4">
              <img
                src={product.imageSrc}
                alt={product.name}
                className="object-contain w-16 h-16 rounded"
              />
              <div>
                <h3 className="text-sm text-gray-900">{product.name}</h3>
                <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                  <div>
                    <dd className="inline font-bold">{product.price}</dd>
                  </div>
                </dl>
              </div>
            </li>
          ))}
        </ul>
        <div className="space-y-4 text-center">
          <button
            type="button"
            className="w-full px-3 py-2 text-sm font-semibold text-black border border-black rounded-md shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Move to Cart
          </button>
        </div>
      </div>
    </div>
  )
}
