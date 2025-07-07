import React, { useState, useEffect } from 'react';
import { useStore } from '../store';
import { FaHome, FaDesktop } from 'react-icons/fa';

interface QuickAccessItem {
  name: string;
  path: string;
  icon: React.ReactNode;
}

const Sidebar = () => {
  const navigateTo = useStore((state) => state.navigateTo);
  const currentPath = useStore((state) => state.currentPath);
  const [quickAccess, setQuickAccess] = useState<QuickAccessItem[]>([]);

  useEffect(() => {
    const fetchPaths = async () => {
      const homeDir = await window.ipcRenderer.getHomeDir();
      const desktopDir = await window.ipcRenderer.getDesktopDir();
      setQuickAccess([
        { name: 'Home', path: homeDir, icon: <FaHome /> },
        { name: 'Desktop', path: desktopDir, icon: <FaDesktop /> },
      ]);
    };
    fetchPaths();
  }, []);

  return (
    <aside className="w-64 flex-shrink-0 bg-gray-200 dark:bg-gray-800 p-4 flex flex-col">
      <h2 className="text-lg font-semibold mb-4">FFFile</h2>
      <div>
        <h3 className="text-xs font-bold uppercase text-gray-500 mb-2">Favorites</h3>
        <ul>
          {quickAccess.map((item) => (
            <li key={item.name}>
              <button
                onClick={() => navigateTo(item.path)}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium ${
                  currentPath === item.path
                    ? 'bg-blue-500 text-white'
                    : 'hover:bg-gray-300 dark:hover:bg-gray-700'
                }`}
              >
                <span className="text-lg">{item.icon}</span>
                <span>{item.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
      {/* Future sections like Drives can be added here */}
    </aside>
  );
};

export default Sidebar;
