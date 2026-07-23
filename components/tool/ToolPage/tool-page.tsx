import Container from "@/components/layout/Container";
import Navbar from "@/components/layout/Navbar";
import PageTitle from "@/components/ui/PageTitle";
import Section from "@/components/ui/Section";

import styles from "./tool-page.module.css";

type Props = {
  title: string;
  description: string;
  children: React.ReactNode;
};

export default function ToolPage({
  title,
  description,
  children,
}: Props) {
  return (
    <>
      <Navbar />

      <main className={styles.page}>
        <Container>

          <PageTitle
            title={title}
            subtitle={description}
          />

          <Section>

            {children}

          </Section>

        </Container>
      </main>
    </>
  );
}
