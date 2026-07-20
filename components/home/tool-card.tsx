import styles from "./tool-card.module.css";
import { ReactNode } from "react";

type ToolCardProps = {
  icon: ReactNode;
  title: string;
  count: number;
  color: string;
};

export default function ToolCard({
  icon,
  title,
  count,
  color
}: ToolCardProps) {
  return (
    <button className={styles.card}>
     <div
  className={styles.icon}
  style={{ color }}
>
  {icon}
</div>

      <h3>{title}</h3>

      <p>{count} tools →</p>
    </button>
  );
}