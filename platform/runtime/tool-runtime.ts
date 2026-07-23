export interface ToolRuntime<
  FileType = File,
  Result = unknown,
> {
  files: FileType[];

  result: Result | null;

  loading: boolean;

  error: string | null;
}