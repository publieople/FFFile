import React from 'react';
import { FileEntry } from '../types';
import FileItem from './FileItem';

interface FileListProps {
  files: FileEntry[];
  onNavigate: (path: string) => void;
}

const FileList: React.FC<FileListProps> = ({ files, onNavigate }) => {
  return (
    <div>
      {/* Header */}
      <div className="flex items-center p-2 border-b border-gray-200 dark:border-gray-700 font-semibold text-sm text-gray-600 dark:text-gray-400">
        <div className="w-6 mr-4 flex-shrink-0"></div>
        <div className="flex-1 mr-4">Name</div>
        <div className="w-40 mr-4">Date modified</div>
        <div className="w-24 text-right">Size</div>
      </div>

      {/* Items */}
      <div>
        {files.map((file) => (
          <FileItem key={file.path} file={file} onNavigate={onNavigate} />
        ))}
      </div>
    </div>
  );
};

export default FileList;
