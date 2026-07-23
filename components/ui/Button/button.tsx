

import styles from "./button.module.css";

type Variant =
  | "primary"
  | "secondary"
  | "ghost"
  | "danger";

type Size =
  | "sm"
  | "md"
  | "lg";

type Props = {
  children: React.ReactNode;

  onPress?: () => void;

  variant?: Variant;

  size?: Size;

  loading?: boolean;

  disabled?: boolean;

  fullWidth?: boolean;

  type?: "button" | "submit";

  leftIcon?: React.ReactNode;

  rightIcon?: React.ReactNode;
};

export default function Button({
  children,
  onPress,
  variant = "primary",
  size = "md",
  loading = false,
  disabled = false,
  fullWidth = false,
  type = "button",
  leftIcon,
  rightIcon,
}: Props) {
  return (
    <button
      type={type}
      onClick={onPress}
      disabled={disabled || loading}
      className={[
        styles.button,
        styles[variant],
        styles[size],
        fullWidth && styles.fullWidth,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <>
  {leftIcon}

  {loading ? "Loading..." : children}

  {rightIcon}
</>
    </button>
  );
}