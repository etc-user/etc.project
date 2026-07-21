
import Logo from "../logo";
import Container from "./container";
import styles from "./navbar.module.css";
import ThemeToggle from "./theme-toggle";
export default function Navbar() {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.content}>
          <Logo priority />

          <div className={styles.right}>

          <ThemeToggle />



            <button className={styles.signIn}>
              Sign in
            </button>
          </div>
        </div>
      </Container>
    </header>
  );
}
