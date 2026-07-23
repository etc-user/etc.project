export type ToolCategory =
  | "image"
  | "pdf"
  | "video"
  | "audio"
  | "archive"
  | "document"
  | "ai"
  | "developer"
  | "other";

export type ToolSettingType =
  | "slider"
  | "select"
  | "toggle"
  | "number"
  | "text";

export interface ToolSetting {
  id: string;
  label: string;
  type: ToolSettingType;

  defaultValue: unknown;

  min?: number;
  max?: number;
  step?: number;

  options?: {
    label: string;
    value: string;
  }[];
}

export interface ToolMetadata {
  id: string;

  slug: string;

  title: string;

  description: string;

  category: ToolCategory;

  icon: string;

  keywords: string[];
}

export interface ToolCapabilities {
  accepts: string[];

  multiple: boolean;

  minFiles: number;

  maxFiles: number;

  maxFileSizeMB: number;
}

export interface ToolResult {
  success: boolean;

  files: File[];

  message?: string;

  warnings?: string[];

  statistics?: Record<string, unknown>;
}

export interface Tool {
  metadata: ToolMetadata;

  capabilities: ToolCapabilities;

  settings: ToolSetting[];

  process(
    files: File[],
    settings: Record<string, unknown>
  ): Promise<ToolResult>;
}