import type { PlatformFile } from "./platform-file";

export async function createPlatformFile(
  file: File
): Promise<PlatformFile> {
  const extension =
    file.name.split(".").pop()?.toLowerCase() ?? "";

  return {
    id: crypto.randomUUID(),

    file,

    name: file.name,

    extension,

    mime: file.type,

    size: file.size,

    previewUrl: file.type.startsWith("image/")
      ? URL.createObjectURL(file)
      : undefined,

    metadata: {},
  };
}