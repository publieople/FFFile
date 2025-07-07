import React from 'react';
import FileList from './FileList';
import { useStore } from '../store';

const MainContent = () => {
  const files = useStore((state) => state.files);
  const error = useStore((state) => state.error);
  const navigateTo = useStore((state) => state.navigateTo);

  if (error) {
    return (
      <main className="flex-1 p-4 overflow-y-auto text-red-500">
        <p>Error: {error}</p>
      </main>
    );
  }

  return (
    <main className="flex-1 p-4 overflow-y-auto">
      <FileList files={files} onNavigate={navigateTo} />
    </main>
  );
};

export default MainContent;
