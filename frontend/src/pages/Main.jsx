import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoanCategories from "./LoanCategory";
import LoanCalculator from "./LoanCalculator";
import Header from "./Header";
import Footer from "./Footer";


const Main = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  const handleButtonClick = () => {
    if (isLoggedIn) {
      navigate('/loan'); // Navigate to the loan page
    } else {
      toast.error('Please log in to access the Loan page.');
    }
  };

  return (
    <div className="bg-blue-200 h-[80vh]">
      <Header />
      <main style={{ backgroundColor: 'blue', color: 'white' }}>
        <section className="py-12 text-center h-[50vh]">
          <h1 className="text-5xl font-bold">Welcome to Saylani Welfare</h1>
          <p className="mt-4">
            We are here to help you with your loan needs. Choose a category and calculate your loan today!
          </p>
          <button
            onClick={handleButtonClick}
            className="mt-6 py-3 px-6 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition duration-300"
          >
            Explore Loans
          </button>
        </section>

        <LoanCategories />
        <LoanCalculator/>
      </main>
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default Main;
