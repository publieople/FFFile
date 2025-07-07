import React from 'react';
import { useStore } from '../store';

const StatusBar = () => {
  const files = useStore((state) => state.files);

  const selectedCount = 0; // Placeholder for future selection logic
  const totalCount = files.length;

  const folderCount = files.filter(f => f.isDirectory).length;
  const fileCount = totalCount - folderCount;

  return (
    <footer className="bg-gray-200 dark:bg-gray-800 p-2 text-sm flex items-center justify-between">
      <div>
        {selectedCount > 0
          ? `${selectedCount} item(s) selected`
          : `${totalCount} items | ${folderCount} folders, ${fileCount} files`
        }
      </div>
      <div>
        {/* Other status info can go here */}
      </div>
    </footer>
  );
};

export default StatusBar;
