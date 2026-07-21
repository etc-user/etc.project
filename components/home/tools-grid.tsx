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
const icons = {
  image: <ImageIcon size={30} strokeWidth={1.8} />,
  file: <FileText size={30} strokeWidth={1.8} />,
  video: <Video size={30} strokeWidth={1.8} />,
  music: <Music size={30} strokeWidth={1.8} />,
  archive: <Archive size={30} strokeWidth={1.8} />,
};
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
    {recommendedTools.length > 0 ? (
 recommendedTools.map((tool, index) => (
  <ToolCard
  key={tool.title}
  icon={icons[tool.icon as keyof typeof icons]}
  title={tool.title}
  description={tool.description}
  color="#4F7CFF"
  delay={index}
/>
))
) : (
  <>
    <ToolCard
  icon={<FileText size={30} strokeWidth={1.8} />}
  title="PDF"
  description="Compress, merge & convert"
  color="#4F7CFF"
/>
    <ToolCard
      icon={<ImageIcon size={30} strokeWidth={1.8} />}
      title="Images"
      description="Edit & optimize images"
      color="#F59E0B"
    />

    <ToolCard
      icon={<Video size={30} strokeWidth={1.8} />}
      title="Video"
      description="Convert & compress videos"
      color="#EF4444"
    />

    <ToolCard
      icon={<Music size={30} strokeWidth={1.8} />}
      title="Audio"
      description="Convert & edit audio"
      color="#10B981"
    />

    <ToolCard
      icon={<Archive size={30} strokeWidth={1.8} />}
      title="Archive"
      description="ZIP & extract files"
      color="#8B5CF6"
    />

    <ToolCard
      icon={<Grid2x2 size={30} strokeWidth={1.8} />}
      title="More"
      description="Explore all tools"
      color="#6B7280"
    />
  </>
)}
      </div>
    </section>
  );
}