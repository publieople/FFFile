export interface FileEntry {
  name: string;
  path: string;
  isDirectory: boolean;
  size: number;
  createdAt: Date;
  modifiedAt: Date;
}
