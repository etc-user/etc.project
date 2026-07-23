import styles from "./card.module.css";

type Props = {
  children: React.ReactNode;

  className?: string;

  hover?: boolean;
};

export default function Card({
  children,
  className = "",
  hover = false,
}: Props) {
  return (
    <div
      className={[
        styles.card,
        hover && styles.hover,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </div>
  );
}