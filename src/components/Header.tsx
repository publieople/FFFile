import React from 'react';
import { useStore } from '../store';
import { FaArrowLeft, FaArrowRight, FaSync } from 'react-icons/fa';

const Header = () => {
  const currentPath = useStore((state) => state.currentPath);
  const navigateTo = useStore((state) => state.navigateTo);

  const handleRefresh = () => {
    if (currentPath) {
      navigateTo(currentPath);
    }
  };

  // Note: Back/Forward functionality requires history management, which will be added later.

  return (
    <header className="bg-white dark:bg-gray-950 p-2 shadow-md z-10 flex items-center gap-4">
      <div className="flex items-center gap-2">
        <button className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 disabled:opacity-50" disabled>
          <FaArrowLeft />
        </button>
        <button className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 disabled:opacity-50" disabled>
          <FaArrowRight />
        </button>
      </div>
      <div className="flex-1">
        <input
          type="text"
          readOnly
          value={currentPath}
          className="w-full bg-gray-100 dark:bg-gray-800 rounded-md px-3 py-1.5 text-sm"
        />
      </div>
      <button onClick={handleRefresh} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
        <FaSync />
      </button>
    </header>
  );
};

export default Header;
