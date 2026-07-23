import styles from "./tool-card.module.css";
import { ReactNode } from "react";

type ToolCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
  color: string;
  href?: string;
  delay?: number;
};

export default function ToolCard({
  icon,
  title,
  description,
  color,
  delay = 0,
  
}: ToolCardProps) {
  return (
    <button
  className={styles.card}
  style={{
    animationDelay: `${delay * 70}ms`,
  }}
>
      <div
        className={styles.icon}
        style={{ color }}
      >
        {icon}
      </div>

      <div className={styles.content}>
        <h3>{title}</h3>

        <p>{description}</p>

        <span className={styles.link}>
          Open Tool →
        </span>
      </div>
    </button>
  );
}