export interface ToolSetting {
  id: string;

  label: string;

  type:
    | "slider"
    | "switch"
    | "select"
    | "number"
    | "text";

  defaultValue: unknown;

  options?: string[];
}