import type { UploadOptions } from "./upload-types";

export function validateUpload(
  files: File[],
  options: UploadOptions
): string[] {
  const errors: string[] = [];

  if (!options.multiple && files.length > 1) {
    errors.push("Only one file is allowed.");
  }

  if (files.length < options.minFiles) {
    errors.push(
      `Minimum ${options.minFiles} file(s) required.`
    );
  }

  if (files.length > options.maxFiles) {
    errors.push(
      `Maximum ${options.maxFiles} file(s) allowed.`
    );
  }

  for (const file of files) {
    const sizeMB = file.size / 1024 / 1024;

    if (sizeMB > options.maxFileSizeMB) {
      errors.push(`${file.name} exceeds size limit.`);
    }

    if (
      options.accepts.length &&
      !options.accepts.includes(file.type)
    ) {
      errors.push(`${file.name} is not supported.`);
    }
  }

  return errors;
}