import React, { useState } from 'react';

function Dropdown() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('All categories');
    const categories = ['Perfumes', 'Skin Care', 'Mobiles', 'Laptops'];

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const selectCategory = (category) => {
        setSelectedCategory(category);
        setIsOpen(false);
    };

    return (
        <div className="flex">
            <label htmlFor="search-dropdown" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Your Email</label>
            <button id="dropdown-button" onClick={toggleDropdown} className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600" type="button">
                {selectedCategory} <svg className={`w-2.5 h-2.5 ms-2.5 transform ${isOpen ? 'rotate-180' : ''}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                </svg>
            </button>
            <div id="dropdown" className={`z-10 ${isOpen ? '' : 'hidden'} bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}>
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
                    {categories.map((category, index) => (
                        <li key={index}>
                            <button type="button" onClick={() => selectCategory(category)} className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                {category}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="relative w-full">
            <div className="flex items-center"> {/* New container for both input and button */}
        <input type="search" id="search-dropdown" className="block p-2.5 p-r-0 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-black focus:border-black dark:bg-gray-700 dark:border-s-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-black" placeholder="Search Accesories , Laptops , Mobiles..." required />
            <button type="submit" className="p-2.5 text-sm font-medium h-full text-white bg-black rounded-e-lg borderhover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"> {/* Adjusted button */}
            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
            <span className="sr-only">Search</span>
            </button>
            </div>
            </div>
        </div>
    );
}

export default Dropdown