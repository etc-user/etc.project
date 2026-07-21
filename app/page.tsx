"use client";

import { useState } from "react";

import Navbar from "@/components/layout/navbar";
import Hero from "@/components/hero";
import UploadBox from "@/components/upload-box";
import ToolsGrid from "@/components/home/tools-grid";

import type { Tool } from "@/lib/recommendations";

export default function Home() {
  const [recommendedTools, setRecommendedTools] = useState<Tool[]>([]);
  const [fileType, setFileType] = useState("");

  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <UploadBox
          setRecommendedTools={setRecommendedTools}
          setFileType={setFileType}
        />

        <ToolsGrid
          recommendedTools={recommendedTools}
          fileType={fileType}
        />
      </main>
    </>
  );
}