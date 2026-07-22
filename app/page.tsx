"use client";

import { useState } from "react";

import Navbar from "@/components/layout/navbar";
import Hero from "@/components/hero";
import UploadBox from "@/components/upload-box";
import UploadedFiles from "@/components/home/uploaded-files";
import ToolsGrid from "@/components/home/tools-grid";
import HomeLayout from "@/components/home/home-layout";

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