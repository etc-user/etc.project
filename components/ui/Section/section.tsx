import styles from "./section.module.css";

type Props = {
  title?: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
};

export default function Section({
  title,
  description,
  children,
  className = "",
}: Props) {
  return (
    <section
      className={[
        styles.section,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {title && (
        <div className={styles.header}>
          <h2 className={styles.title}>
            {title}
          </h2>

          {description && (
            <p className={styles.description}>
              {description}
            </p>
          )}
        </div>
      )}

      <div className={styles.content}>
        {children}
      </div>
    </section>
  );
}