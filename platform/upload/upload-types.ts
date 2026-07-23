import type { PlatformFile } from "../file-engine/platform-file";

export interface UploadOptions {
  multiple: boolean;

  minFiles: number;

  maxFiles: number;

  maxFileSizeMB: number;

  accepts: string[];
}

export interface UploadResult {
  success: boolean;

  files: PlatformFile[];

  errors: string[];
}