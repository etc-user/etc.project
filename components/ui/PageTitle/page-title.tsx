import styles from "./page-title.module.css";

type Props = {
  title: string;

  subtitle?: string;

  align?: "left" | "center";

  className?: string;
};

export default function PageTitle({
  title,
  subtitle,
  align = "left",
  className = "",
}: Props) {
  return (
    <div
      className={[
        styles.wrapper,
        styles[align],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <h1 className={styles.title}>
        {title}
      </h1>

      {subtitle && (
        <p className={styles.subtitle}>
          {subtitle}
        </p>
      )}
    </div>
  );
}