import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Loan = () => {
  // Define the loan categories and their respective details
  const loanCategories = [
    {
      title: 'Wedding Loans',
      subcategories: ['Valima', 'Furniture', 'Valima Food', 'Jahez'],
      maxLoan: 'PKR 5 Lakh',
      loanPeriod: '3 years',
      info: 'Wedding loans to support your celebrations and ceremonies.'
    },
    {
      title: 'Home Construction Loans',
      subcategories: ['Structure', 'Finishing', 'Loan'],
      maxLoan: 'PKR 10 Lakh',
      loanPeriod: '5 years',
      info: 'Loans for constructing or renovating your home.'
    },
    {
      title: 'Business Startup Loans',
      subcategories: ['Buy Stall', 'Advance Rent for Shop', 'Shop Assets', 'Shop Machinery'],
      maxLoan: 'PKR 10 Lakh',
      loanPeriod: '5 years',
      info: 'Support for new businesses to kick-start their operations.'
    },
    {
      title: 'Education Loans',
      subcategories: ['University Fees', 'Child Fees Loan'],
      maxLoan: 'Based on requirement',
      loanPeriod: '4 years',
      info: 'Loans for supporting educational pursuits.'
    },
  ];

  // State to manage active category
  const [activeCategory, setActiveCategory] = useState(null);

  // Handle category click to toggle information
  const handleCategoryClick = (index) => {
    setActiveCategory(activeCategory === index ? null : index); // Toggle category info
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white p-6">
        <h2 className="text-3xl font-semibold mb-6">Loan Category</h2>
        <nav>
          <ul className="space-y-4">
            {loanCategories.map((category, index) => (
              <li key={index}>
                <button
                  onClick={() => handleCategoryClick(index)}
                  className="w-full text-left text-lg text-white hover:text-blue-400 focus:outline-none transition duration-300 ease-in-out"
                >
                  {category.title}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 bg-gray-100">
        
        {loanCategories.map((category, index) => (
          <div key={index} className={`bg-white shadow-lg rounded-lg p-6 mb-6 ${activeCategory === index ? 'block' : 'hidden'}`}>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">{category.title}</h2>
            <p className="text-lg text-gray-600 mb-4">{category.info}</p>
            <ul className="space-y-2 mb-4">
              {category.subcategories.map((subcategory, idx) => (
                <li key={idx} className="text-lg text-gray-600">- {subcategory}</li>
              ))}
            </ul>
            <p className="text-lg text-gray-800">Maximum loan: <strong>{category.maxLoan}</strong></p>
            <p className="text-lg text-gray-800">Loan period: <strong>{category.loanPeriod}</strong></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Loan;
