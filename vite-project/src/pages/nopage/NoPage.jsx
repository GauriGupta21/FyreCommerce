import React from 'react';

function NoPage() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center p-10 bg-white rounded-lg shadow-lg">
        <h1 className="text-9xl font-extrabold text-gray-800">404</h1>
        <p className="text-2xl font-semibold text-gray-700 mt-4">Oops! Page not found</p>
        <p className="text-gray-600 mt-2">The page you are looking for does not exist or has been moved.</p>
        <a href="/" className="mt-6 inline-block px-6 py-3 bg-teal-500 text-white text-lg font-semibold rounded-lg hover:bg-teal-600 transition duration-300">
          Go to Homepage
        </a>
      </div>
    </div>
  );
}

export default NoPage;
