import { createPlatformFile } from "../file-engine/create-platform-file";

import { validateUpload } from "./upload-validator";

import type {
  UploadOptions,
  UploadResult,
} from "./upload-types";

export async function uploadFiles(
  browserFiles: File[],
  options: UploadOptions
): Promise<UploadResult> {
  const errors = validateUpload(browserFiles, options);

  if (errors.length) {
    return {
      success: false,
      files: [],
      errors,
    };
  }

  const files = await Promise.all(
    browserFiles.map(createPlatformFile)
  );

  return {
    success: true,
    files,
    errors: [],
  };
}