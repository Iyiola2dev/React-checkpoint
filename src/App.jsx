// src/App.js
import React from 'react';
import Name from './components/Name';
import Price from './components/Price';
import Description from './components/Description';
import Image from './components/Image';


const firstName = "Iyiola"; // Change to your name or leave empty for "Hello, there!"

function App() {
  return (
    <div className="container mx-auto mt-10 p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-sm mx-auto">
        <Name />
        <Price />
        <Description />
        <Image />
      </div>
      <div className="mt-4 text-center">
        <h2 className="text-2xl font-semibold text-blue-600">
          Hello, {firstName || 'there!'}
        </h2>
        {firstName && <img src="https://via.placeholder.com/100" alt="Placeholder" className="mt-2" />}
      </div>
    </div>
  );
}

export default App;
