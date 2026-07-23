export interface PlatformFile {
  /**
   * Unique ID inside etc.
   */
  id: string;

  /**
   * Original browser file
   */
  file: File;

  /**
   * Original filename
   */
  name: string;

  /**
   * File extension
   */
  extension: string;

  /**
   * MIME type
   */
  mime: string;

  /**
   * Size in bytes
   */
  size: number;

  /**
   * Preview URL
   */
  previewUrl?: string;

  /**
   * Image dimensions
   */
  width?: number;

  height?: number;

  /**
   * Audio / Video duration
   */
  duration?: number;

  /**
   * Additional metadata
   */
  metadata: Record<string, unknown>;
}