import { create } from 'zustand';
import { FileEntry } from './types';

interface AppState {
  currentPath: string;
  files: FileEntry[];
  error: string | null;
  initialize: () => Promise<void>;
  navigateTo: (path: string) => void;
}

export const useStore = create<AppState>((set, get) => ({
  currentPath: '',
  files: [],
  error: null,

  initialize: async () => {
    try {
      const homeDir = await window.ipcRenderer.getHomeDir();
      get().navigateTo(homeDir);
    } catch (err) {
      console.error(err);
      set({ error: 'Failed to get home directory.' });
    }
  },

  navigateTo: async (path: string) => {
    set({ currentPath: path, error: null });
    try {
      const fileList = await window.ipcRenderer.getFiles(path);
      const sortedFiles = fileList.sort((a, b) => {
        if (a.isDirectory && !b.isDirectory) return -1;
        if (!a.isDirectory && b.isDirectory) return 1;
        return a.name.localeCompare(b.name);
      });
      set({ files: sortedFiles });
    } catch (err) {
      console.error(err);
      set({ error: `Failed to read directory: ${path}` });
    }
  },
}));
