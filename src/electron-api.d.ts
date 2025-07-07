import { FileEntry } from './types';

export interface IpcRendererApi {
  getFiles: (path: string) => Promise<FileEntry[]>;
  getHomeDir: () => Promise<string>;
  getDesktopDir: () => Promise<string>;
  // Define other exposed APIs here
}

declare global {
  interface Window {
    ipcRenderer: IpcRendererApi;
  }
}
