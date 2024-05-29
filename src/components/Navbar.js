import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 bg-opacity-35 w-full text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">Adriana Cunha Coaching</div>
        <div className="space-x-4">
          <a href="#home" className="hover:underline">Home</a>
          <a href="#videos" className="hover:underline">Videos</a>
          <a href="#contact" className="hover:underline">Contatos</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
