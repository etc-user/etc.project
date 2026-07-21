import styles from "./uploaded-files.module.css";
import { Trash2 } from "lucide-react";

type UploadedFilesProps = {
  files: File[];
  setFiles: React.Dispatch<
    React.SetStateAction<File[]>
  >;
};

export default function UploadedFiles({
  files,
  setFiles,
}: UploadedFilesProps) {
  if (files.length === 0) return null;

const removeFile = (name: string) => {
  setFiles((current) =>
    current.filter((file) => file.name !== name)
  );
};

  return (
    <section className={styles.wrapper}>
      <h2>Uploaded Files</h2>

      <div className={styles.list}>
        {files.map((file) => (
          <div
            key={file.name}
            className={styles.file}
          >
            <div>
  <strong>{file.name}</strong>

  <p>
    {file.name.split(".").pop()?.toUpperCase()} •{" "}
    {(file.size / 1024 / 1024).toFixed(2)} MB
  </p>
</div>

<div className={styles.actions}>
  <span className={styles.status}>
    Ready
  </span>

  <button
    className={styles.delete}
    onClick={() => removeFile(file.name)}
  >
    <Trash2 size={18} />
  </button>
</div>
          </div>
        ))}
      </div>
    </section>
  );
}