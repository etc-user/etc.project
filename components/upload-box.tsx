import styles from "./upload-box.module.css";
import { FileText, Upload } from "lucide-react";

export default function UploadBox() {
  return (
    <section className={styles.wrapper}>
      <button className={styles.box}>
        <Upload size={48} strokeWidth={1.5} />

        <h3>Drop your file here</h3>

        <p>
          or <span>click to browse</span>
        </p>
      </button>
    </section>
  );
}