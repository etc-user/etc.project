import styles from "./hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <h1 className={styles.title}>
        Whatever you need...
        <br />
        <span>
  etc<span className={styles.brand}>.</span>
</span>
      </h1>

      <p className={styles.subtitle}>
        The operating system for everything digital.
      </p>
    </section>
  );
}