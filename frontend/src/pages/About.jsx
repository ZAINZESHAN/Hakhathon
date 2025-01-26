import React from 'react';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  const handleGetLoanClick = () => {
    navigate('/loan'); // Redirect to loan page
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Section: About Us Content */}
          <div className="flex flex-col justify-center text-center md:text-left">
            <h2 className="text-4xl font-semibold text-gray-800 mb-4">About Us</h2>
            <p className="text-lg text-gray-600 mb-6">
              Welcome to LoanApp! We are dedicated to providing flexible and reliable loan solutions for various needs, from personal loans to business funding. Whether you're planning a wedding, constructing a home, starting a business, or furthering your education, we offer tailored financial assistance to help you achieve your goals.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Our mission is to simplify the loan process, making it easier for individuals and businesses to access the financial support they need with competitive interest rates and clear terms. Our team is committed to customer satisfaction and offering seamless loan experiences.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              At LoanApp, we prioritize transparency, security, and customer service. Join us today and let us help you take the next step in achieving your dreams.
            </p>

            {/* Get Loan Button */}
            <button
              onClick={handleGetLoanClick}
              className="mt-6 py-3 px-6 text-white bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition duration-300 ease-in-out"
            >
              Get Loan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
