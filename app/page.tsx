import Navbar from "@/components/layout/navbar";
import Hero from "@/components/hero";
import UploadBox from "@/components/upload-box";
import ToolsGrid from "@/components/home/tools-grid";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <UploadBox />
        <ToolsGrid />
      </main>
    </>
  );
}