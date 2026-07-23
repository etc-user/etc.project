export type ToolCategory =
  | "image"
  | "video"
  | "audio"
  | "document"
  | "archive"
  | "ai"
  | "developer"
  | "other";

export interface ToolDefinition {
  // Identity
  id: string;
  slug: string;

  // Display
  title: string;
  description: string;
  icon: string;

  // Organization
  category: ToolCategory;

  // Upload
  accepts: string[];
  multiple: boolean;
  maxFiles?: number;

  // State
  enabled: boolean;
  featured?: boolean;
}