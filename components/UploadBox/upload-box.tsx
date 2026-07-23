"use client";

import styles from "./upload-box.module.css";
import { Upload } from "lucide-react";
import { useRef, useState } from "react";
import { getRecommendations } from "@/lib/recommendations";
import type { Tool } from "@/lib/recommendations";

interface UploadBoxProps {
  files: File[];
  setFiles: React.Dispatch<React.SetStateAction<File[]>>;

  setRecommendedTools: React.Dispatch<React.SetStateAction<Tool[]>>;
  setFileType: React.Dispatch<React.SetStateAction<string>>;
}

export default function UploadBox({
  files,
  setFiles,
  setRecommendedTools,
  setFileType,
}: UploadBoxProps) {


  const [isDragging, setIsDragging] = useState(false);


  const inputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
  e.preventDefault();
  setIsDragging(true);
};

const handleDragLeave = () => {
  setIsDragging(false);
};

const validateFiles = (files: File[]) => {
  if (files.length <= 1) return true;

  const firstType = detectFileType(files[0]);

  return files.every(
    (file) => detectFileType(file) === firstType
  );
};

const handleDrop = (e: React.DragEvent) => {
  e.preventDefault();
  setIsDragging(false);

const droppedFiles = Array.from(e.dataTransfer.files);

if (!validateFiles(droppedFiles)) {
  alert("Please upload files of the same type.");
  return;
}

if (droppedFiles.length === 0) return;

setFiles(droppedFiles);

const detected = detectFileType(droppedFiles[0]);

setFileType(detected);

setRecommendedTools(getRecommendations(detected));

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

const getFileLabel = (file: File, count: number) => {
  const extension = file.name.split(".").pop()?.toUpperCase() || "FILE";

  return `${extension} file${count > 1 ? "s" : ""}`;
};

const handleFileChange = (
  e: React.ChangeEvent<HTMLInputElement>
) => {
const selectedFiles = Array.from(e.target.files ?? []);

if (!validateFiles(selectedFiles)) {
  alert("Please upload files of the same type.");
  return;
}

if (selectedFiles.length === 0) return;

setFiles(selectedFiles);

const detected = detectFileType(selectedFiles[0]);

setFileType(detected);

setRecommendedTools(getRecommendations(detected));
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
  {files.length > 0
    ? `${files.length} ${getFileLabel(files[0], files.length)} Ready to Process`
    : "Drop your files here"}
</h3>

<p>
  {files.length > 0 ? (
    <>
      Total Size:{" "}
      {(
        files.reduce((total, file) => total + file.size, 0) /
        1024 /
        1024
      ).toFixed(2)}{" "}
      MB
    </>
  ) : (
    <>
      or <span>click to browse</span>
    </>
  )}
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