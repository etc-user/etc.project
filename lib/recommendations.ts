export type Tool = {
  title: string;
  description: string;
  icon: string;
  category: "image" | "pdf" | "video" | "audio" | "archive";
};



const recommendations: {
  image: Tool[];
  pdf: Tool[];
  video: Tool[];
  audio: Tool[];
  archive: Tool[];
} = {
  
  image: [
    { title: "Remove Background", icon: "image" ,description: "Remove unwanted backgrounds." , category: "image"},
    { title: "Compress Image", icon: "image" ,description: "Reduce the image size without losing quality.", category: "image"},
    { title: "Convert Image", icon: "image" ,description: "Change image format.", category: "image"},
    { title: "Resize Image", icon: "image" ,description: "Adjust image dimensions.", category: "image"},
    { title: "Upscale Image", icon: "image" ,description: "Enhance image quality.", category: "image"},
    { title: "Crop Image", icon: "image" ,description: "Trim unwanted areas.", category: "image"},
  ],

  pdf: [
    { title: "Compress PDF", icon: "file" ,description: "Reduce the file size of your PDFs without losing quality.", category: "pdf"},
    { title: "Merge PDFs", icon: "file" ,description: "Combine multiple PDFs.", category: "pdf"},
    { title: "Split PDF", icon: "file" ,description: "Separate PDF pages.", category: "pdf"},
    { title: "Convert to Word", icon: "file" ,description: "Editable Word document.", category: "pdf"},
    { title: "Extract Images", icon: "file" ,description: "Save embedded images.", category: "pdf"},
    { title: "Protect PDF", icon: "file" ,description: "Add password protection.", category: "pdf"},
  ],

  video: [
    { title: "Compress Video", icon: "video" ,description: "Reduce the video size without losing quality.", category: "video"},
    { title: "Trim Video", icon: "video" ,description: "Cut unwanted parts.", category: "video"},
    { title: "Extract Audio", icon: "video" ,description: "Save audio only.", category: "video"},
    { title: "Convert Video", icon: "video" ,description: "Change video format.", category: "video"},
  ],

  audio: [
    { title: "Convert Audio", icon: "music" ,description: "Change audio format.", category: "audio"},
    { title: "Trim Audio", icon: "music" ,description: "Cut unwanted parts.", category: "audio"},
    { title: "Increase Volume", icon: "music" ,description: "Amplify your audio.", category: "audio"},
  ],

  archive: [
    { title: "Extract ZIP", icon: "archive" ,description: "Unpack compressed files.", category: "archive"},
    { title: "Compress Files", icon: "archive" ,description: "Create ZIP archive.", category: "archive"},
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