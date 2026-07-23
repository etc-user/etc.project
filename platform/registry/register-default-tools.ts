import { registry } from "./tool-registry";

registry.register({
  id: "compress-image",

  slug: "compress-image",

  title: "Compress Image",

  description: "Reduce image file size.",

  icon: "compress",

  category: "image",

  accepts: ["image/*"],

  multiple: true,

  maxFiles: 100,

  enabled: true,

  featured: true,
});