"use client";

import styles from "./upload-box.module.css";
import { Upload } from "lucide-react";
import { useRef, useState } from "react";
import { getRecommendations } from "@/lib/recommendations";
import type { Tool } from "@/lib/recommendations";

interface UploadBoxProps {
  setRecommendedTools: React.Dispatch<React.SetStateAction<Tool[]>>;
  setFileType: React.Dispatch<React.SetStateAction<string>>;
}

export default function UploadBox({
  setRecommendedTools,
  setFileType,
}: UploadBoxProps) {


  const [isDragging, setIsDragging] = useState(false);
const [file, setFile] = useState<File | null>(null);


  const inputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
  e.preventDefault();
  setIsDragging(true);
};

const handleDragLeave = () => {
  setIsDragging(false);
};

const handleDrop = (e: React.DragEvent) => {
  e.preventDefault();
  setIsDragging(false);

  const droppedFile = e.dataTransfer.files[0];

 if (droppedFile) {
  setFile(droppedFile);

  const detected = detectFileType(droppedFile);

  setFileType(detected);

  setRecommendedTools(getRecommendations(detected));
}

};

const handleBrowse = () => {
  inputRef.current?.click();
};

const detectFileType = (file: File) => {
  if (file.type.startsWith("image/")) return "image";

  if (file.type === "application/pdf") return "pdf";

  if (file.type.startsWith("video/")) return "video";

  if (file.type.startsWith("audio/")) return "audio";

  if (
    file.type.includes("zip") ||
    file.name.endsWith(".zip")
  ) {
    return "archive";
  }

  return "unknown";
};

const handleFileChange = (
  e: React.ChangeEvent<HTMLInputElement>
) => {
  const selectedFile = e.target.files?.[0];

  if (selectedFile) {
    setFile(selectedFile); // or droppedFile

const detected = detectFileType(selectedFile); // or droppedFile

setFileType(detected);

setRecommendedTools(getRecommendations(detected));
  }
};

  return (
    <section className={styles.wrapper}>
      <button
  className={`${styles.box} ${isDragging ? styles.dragging : ""}`}
  onDragOver={handleDragOver}
  onDragLeave={handleDragLeave}
  onDrop={handleDrop}
  onClick={handleBrowse}
>
<Upload
  className={styles.icon}
  size={48}
  strokeWidth={1.5}
/>

  <h3>
  {file ? file.name : "Drop your file here"}
</h3>

  <p>
  {file
    ? `${(file.size / 1024 / 1024).toFixed(2)} MB`
    : <>or <span>click to browse</span></>}
</p>
</button>
<input
  ref={inputRef}
  type="file"
  hidden
  onChange={handleFileChange}
/>
    </section>
  );
}