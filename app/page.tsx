"use client";

import { useState } from "react";

import Navbar from "@/components/layout/navbar";
import Hero from "@/components/hero";
import UploadBox from "@/components/upload-box";
import ToolsGrid from "@/components/home/tools-grid";
import type { Tool } from "@/lib/recommendations";
import UploadedFiles from "@/components/home/uploaded-files";
export default function Home() {
  const [recommendedTools, setRecommendedTools] = useState<Tool[]>([]);
  const [fileType, setFileType] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <UploadBox
       files={files}
       setFiles={setFiles}
       setRecommendedTools={setRecommendedTools}
       setFileType={setFileType}
        />

        <UploadedFiles
  files={files}
  setFiles={setFiles}
/>

        <ToolsGrid
          recommendedTools={recommendedTools}
          fileType={fileType}
        />
      </main>
    </>
  );
}