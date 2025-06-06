import React from 'react';
import Header from '../components/Header';

function Home() {
  return (
    <div>
      <Header />
      <div className="flex flex-col md:flex-row h-screen">
        {/* Left Side */}
        <div className="flex-1 bg-white p-8">
          <div className="text-left">
            <h2 className="text-6xl font-bold">
              <span className="text-purple-800">Share more,</span>
              <span className="text-pink-500"> waste less</span>
            </h2>
            <p className="mt-4 text-lg text-gray-700">
              Beat waste with FoodMate: the app for finding what you need and sharing what you don't with local people.
            </p>
            <button className="mt-8 bg-purple-800 text-white py-2 px-4 rounded-full">Get the app</button>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex-1 bg-gradient-to-r from-orange-400 to-pink-500 flex items-center justify-center">
          <div className="text-center">
            <img src="/assets/phone-mockup.png" alt="Phone Mockup" className="w-1/2 mx-auto" />
            <img src="/assets/happy-user.png" alt="Happy User" className="w-1/4 mx-auto mt-4" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home; 