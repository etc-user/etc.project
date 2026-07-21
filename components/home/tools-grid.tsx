import styles from "./tools-grid.module.css";

import {
  FileText,
  Image as ImageIcon,
  Video,
  Music,
  Archive,
  Grid2x2,
} from "lucide-react";

import ToolCard from "./tool-card";

import type { Tool } from "@/lib/recommendations";
interface ToolsGridProps {
  recommendedTools: Tool[];
  fileType: string;
}

export default function ToolsGrid({
  recommendedTools,
  fileType,

}: ToolsGridProps) {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>
  {recommendedTools.length > 0
    ? `Recommended for ${fileType}`
    : "Popular Tools"}
</h2>

      <div className={styles.grid}>
        <ToolCard
          icon={<FileText size={30} strokeWidth={1.8} />}
          title="PDF"
          count={23}
          color="#4F7CFF"
        />

        <ToolCard
          icon={<ImageIcon size={30} strokeWidth={1.8} />}
          title="Images"
          count={18}
          color="#F59E0B"
        />

        <ToolCard
          icon={<Video size={30} strokeWidth={1.8} />}
          title="Video"
          count={12}
          color="#EF4444"
        />

        <ToolCard
          icon={<Music size={30} strokeWidth={1.8} />}
          title="Audio"
          count={14}
          color="#10B981"
        />

        <ToolCard
          icon={<Archive size={30} strokeWidth={1.8} />}
          title="Archive"
          count={9}
          color="#8B5CF6"
        />

        <ToolCard
          icon={<Grid2x2 size={30} strokeWidth={1.8} />}
          title="More"
          count={150}
          color="#6B7280"
        />
      </div>
    </section>
  );
}