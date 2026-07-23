import styles from "./panel.module.css";

type Props = {
  children: React.ReactNode;

  className?: string;
};

export default function Panel({
  children,
  className = "",
}: Props) {
  return (
    <div
      className={[
        styles.panel,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </div>
  );
}