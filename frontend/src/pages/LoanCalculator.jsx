'use client';

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LoanCalculator = ({ selectedCategory }) => {
  // Loan categories and details
  const loanDetails = {
    "Wedding Loans": {
      subcategories: ["Valima", "Furniture", "Valima Food", "Jahez"],
      maxLoan: 500000, // PKR 5 Lakh
      loanPeriod: 3, // 3 years
    },
    "Home Construction Loans": {
      subcategories: ["Structure", "Finishing", "Loan"],
      maxLoan: 1000000, // PKR 10 Lakh
      loanPeriod: 5, // 5 years
    },
    "Business Startup Loans": {
      subcategories: ["Buy Stall", "Advance Rent for Shop", "Shop Assets", "Shop Machinery"],
      maxLoan: 1000000, // PKR 10 Lakh
      loanPeriod: 5, // 5 years
    },
    "Education Loans": {
      subcategories: ["University Fees", "Child Fees Loan"],
      maxLoan: "Based on requirement", // No predefined limit
      loanPeriod: 4, // 4 years
    },
  };

  const categoryDetails = loanDetails[selectedCategory];
  const [selectedSubcategory, setSelectedSubcategory] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [initialDeposit, setInitialDeposit] = useState(0);
  const [monthlyEMI, setMonthlyEMI] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  // Calculate EMI
  const calculateEMI = (loanAmount, initialDeposit) => {
    const annualInterestRate = 10;
    const monthlyInterestRate = annualInterestRate / 100 / 12;
    const loanPrincipal = loanAmount - initialDeposit;
    const totalPayments = categoryDetails.loanPeriod * 12;

    return (
      (loanPrincipal * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalPayments)) /
      (Math.pow(1 + monthlyInterestRate, totalPayments) - 1)
    );
  };

  useEffect(() => {
    if (loanAmount && initialDeposit >= 0) {
      const emi = calculateEMI(loanAmount, initialDeposit);
      setMonthlyEMI(emi);
    }
  }, [loanAmount, initialDeposit]);

  const handleLoanAmountChange = (e) => {
    const value = parseFloat(e.target.value);
    if (categoryDetails.maxLoan !== "Based on requirement" && value > categoryDetails.maxLoan) {
      setErrorMessage(`Loan amount should not exceed PKR ${categoryDetails.maxLoan.toLocaleString()}`);
    } else {
      setErrorMessage("");
      setLoanAmount(value);
    }
  };

  const handleApplyLoan = () => {
    // Check if user is logged in (replace with real logic)
    const isLoggedIn = localStorage.getItem("token");
    if (isLoggedIn) {
      navigate("/loan-request");
    } else {
      navigate("/login");
    }
  };

  if (!categoryDetails) {
    return <p className="text-transparent">Selected category details are not available.</p>;
  }

  return (
    <div className="w-full max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
      <h3 className="text-2xl font-semibold text-gray-700 text-center mb-6">Loan Calculator</h3>
      
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-600 mb-2">Select Subcategory</label>
        <select
          className="w-full px-4 py-2 border border-gray-300 rounded-lg"
          value={selectedSubcategory}
          onChange={(e) => setSelectedSubcategory(e.target.value)}
        >
          <option value="">Choose Subcategory</option>
          {categoryDetails.subcategories.map((subcategory, idx) => (
            <option key={idx} value={subcategory}>{subcategory}</option>
          ))}
        </select>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-600 mb-2">Loan Amount</label>
        <input
          type="number"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg"
          value={loanAmount}
          onChange={handleLoanAmountChange}
        />
        {errorMessage && <p className="text-red-600 text-sm mt-2">{errorMessage}</p>}
      </div>

      {monthlyEMI > 0 && (
        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <h4 className="text-lg font-semibold mb-2">Monthly EMI</h4>
          <p className="text-xl font-bold text-blue-600">PKR {monthlyEMI.toFixed(2)}</p>
        </div>
      )}

      <button
        className="w-full mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg"
        onClick={handleApplyLoan}
        disabled={!selectedSubcategory || !loanAmount || errorMessage}
      >
        Apply for Loan
      </button>
    </div>
  );
};

export default LoanCalculator;
