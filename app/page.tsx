"use client";

import { useState } from "react";

import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/Hero/hero";
import UploadBox from "@/components/UploadBox/upload-box";
import HomeLayout from "@/components/Landing/home-layout";
import ToolsGrid from "@/components/Landing/tools-grid";
import UploadedFiles from "@/components/Landing/uploaded-files";

import type { Tool } from "@/lib/recommendations";

export default function Home() {
  const [recommendedTools, setRecommendedTools] = useState<Tool[]>([]);
  const [fileType, setFileType] = useState("");
  const [files, setFiles] = useState<File[]>([]);

  const hasFiles = files.length > 0;

  return (
    <>
      <Navbar />

      <main>
        <Hero />

        {!hasFiles ? (
          <>
            <UploadBox
              files={files}
              setFiles={setFiles}
              setRecommendedTools={setRecommendedTools}
              setFileType={setFileType}
            />

            <ToolsGrid
              recommendedTools={recommendedTools}
              fileType={fileType}
            />
          </>
        ) : (
          <HomeLayout filesCount={files.length}>
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
          </HomeLayout>
        )}
      </main>
    </>
  );
}