import React from 'react';

const DropdownNavbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="text-white font-bold">My App</div>
          <ul className="flex space-x-4 text-white">
            <li><a href="#" className="hover:text-gray-300">Home</a></li>
            <li><a href="#" className="hover:text-gray-300">About</a></li>
            <li className="relative">
              <a href="#" className="hover:text-gray-300">Dropdown</a>
              <ul className="absolute hidden bg-gray-800 text-white pt-2">
                <li><a href="#" className="hover:text-gray-300">Option 1</a></li>
                <li><a href="#" className="hover:text-gray-300">Option 2</a></li>
                <li><a href="#" className="hover:text-gray-300">Option 3</a></li>
              </ul>
            </li>
            <li><a href="#" className="hover:text-gray-300">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default DropdownNavbar;
