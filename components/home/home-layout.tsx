"use client";

import styles from "./home-layout.module.css";

type HomeLayoutProps = {
  children: React.ReactNode[];
  filesCount: number;
};

export default function HomeLayout({
  children,
  filesCount,
}: HomeLayoutProps) {
  const [uploadBox, uploadedFiles, toolsGrid] = children;

  const showToolsOnRight = filesCount > 3;

  return (
    <>
      <section className={styles.workspace}>
        <aside className={styles.sidebar}>
          {uploadedFiles}
        </aside>

        <section className={styles.main}>
          {uploadBox}

          {showToolsOnRight && toolsGrid}
        </section>
      </section>

      {!showToolsOnRight && (
        <div className={styles.centerTools}>
          {toolsGrid}
        </div>
      )}
    </>
  );
}