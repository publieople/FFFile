import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import StatusBar from './StatusBar';

const Layout = () => {
  return (
    <div className="flex h-screen w-full bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Sidebar />
      <div className="flex flex-1 flex-col">
        <Header />
        <MainContent />
        <StatusBar />
      </div>
    </div>
  );
};

export default Layout;
