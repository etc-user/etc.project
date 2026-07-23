
import Logo from "@/components/Logo";
import Container from "@/components/layout/Container";
import styles from "./navbar.module.css";
import ThemeToggle from "@/components/layout/ThemeToggle";
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
