import { Sun } from "lucide-react";
import Logo from "../logo";
import Container from "./container";
import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.content}>
          <Logo priority />

          <div className={styles.right}>
            <button
  className={styles.themeButton}
  aria-label="Toggle theme"
>
  <Sun size={18} strokeWidth={2} />
</button>

            <button className={styles.signIn}>
              Sign in
            </button>
          </div>
        </div>
      </Container>
    </header>
  );
}
