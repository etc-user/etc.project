export type Tool = {
  title: string;
  icon: string;
};

const recommendations = {
  image: [
    { title: "Remove Background", icon: "image" },
    { title: "Compress Image", icon: "image" },
    { title: "Convert Image", icon: "image" },
    { title: "Resize Image", icon: "image" },
    { title: "Upscale Image", icon: "image" },
    { title: "Crop Image", icon: "image" },
  ],

  pdf: [
    { title: "Compress PDF", icon: "file" },
    { title: "Merge PDFs", icon: "file" },
    { title: "Split PDF", icon: "file" },
    { title: "Convert to Word", icon: "file" },
    { title: "Extract Images", icon: "file" },
    { title: "Protect PDF", icon: "file" },
  ],

  video: [
    { title: "Compress Video", icon: "video" },
    { title: "Trim Video", icon: "video" },
    { title: "Extract Audio", icon: "video" },
    { title: "Convert Video", icon: "video" },
  ],

  audio: [
    { title: "Convert Audio", icon: "music" },
    { title: "Trim Audio", icon: "music" },
    { title: "Increase Volume", icon: "music" },
  ],

  archive: [
    { title: "Extract ZIP", icon: "archive" },
    { title: "Compress Files", icon: "archive" },
  ],
};

export default recommendations;

export function getRecommendations(fileType: string): Tool[] {
  switch (fileType) {
    case "image":
      return recommendations.image;

    case "pdf":
      return recommendations.pdf;

    case "video":
      return recommendations.video;

    case "audio":
      return recommendations.audio;

    case "archive":
      return recommendations.archive;

    default:
      return [];
  }
}