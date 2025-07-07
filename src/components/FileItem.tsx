import React from 'react';
import { FileEntry } from '../types';
import { FaFolder, FaFile, FaFileImage, FaFilePdf, FaFileWord, FaFileExcel, FaFilePowerpoint, FaFileArchive, FaFileAudio, FaFileVideo, FaFileCode } from 'react-icons/fa';
import { DiJavascript1, DiCss3Full, DiHtml5, DiReact } from 'react-icons/di';

const getFileIcon = (file: FileEntry) => {
  if (file.isDirectory) {
    return <FaFolder className="text-yellow-500" />;
  }

  const extension = file.name.split('.').pop()?.toLowerCase();

  switch (extension) {
    case 'jpg':
    case 'jpeg':
    case 'png':
    case 'gif':
    case 'bmp':
    case 'svg':
      return <FaFileImage className="text-purple-500" />;
    case 'pdf':
      return <FaFilePdf className="text-red-500" />;
    case 'doc':
    case 'docx':
      return <FaFileWord className="text-blue-500" />;
    case 'xls':
    case 'xlsx':
      return <FaFileExcel className="text-green-500" />;
    case 'ppt':
    case 'pptx':
      return <FaFilePowerpoint className="text-orange-500" />;
    case 'zip':
    case 'rar':
    case '7z':
    case 'tar':
    case 'gz':
      return <FaFileArchive className="text-gray-500" />;
    case 'mp3':
    case 'wav':
    case 'ogg':
      return <FaFileAudio className="text-pink-500" />;
    case 'mp4':
    case 'avi':
    case 'mov':
    case 'mkv':
      return <FaFileVideo className="text-red-600" />;
    case 'js':
    case 'jsx':
      return <DiJavascript1 className="text-yellow-400" />;
    case 'ts':
    case 'tsx':
      return <DiReact className="text-blue-400" />;
    case 'css':
    case 'scss':
      return <DiCss3Full className="text-blue-600" />;
    case 'html':
      return <DiHtml5 className="text-orange-600" />;
    case 'json':
    case 'py':
    case 'java':
    case 'c':
    case 'cpp':
    case 'cs':
    case 'go':
    case 'php':
    case 'rb':
    case 'rs':
      return <FaFileCode className="text-gray-400" />;
    default:
      return <FaFile className="text-gray-400" />;
  }
};

const formatBytes = (bytes: number, decimals = 2) => {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

interface FileItemProps {
  file: FileEntry;
  onNavigate: (path: string) => void;
}

const FileItem: React.FC<FileItemProps> = ({ file, onNavigate }) => {
  const handleDoubleClick = () => {
    if (file.isDirectory) {
      onNavigate(file.path);
    }
  };

  return (
    <div
      className="flex items-center p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer"
      onDoubleClick={handleDoubleClick}
    >
      <div className="w-6 text-xl mr-4 flex-shrink-0">{getFileIcon(file)}</div>
      <div className="flex-1 truncate mr-4">
        <p className="font-medium">{file.name}</p>
      </div>
      <div className="w-40 text-sm text-gray-500 dark:text-gray-400 mr-4">
        {new Date(file.modifiedAt).toLocaleString()}
      </div>
      <div className="w-24 text-sm text-right text-gray-500 dark:text-gray-400">
        {!file.isDirectory ? formatBytes(file.size) : ''}
      </div>
    </div>
  );
};

export default FileItem;
