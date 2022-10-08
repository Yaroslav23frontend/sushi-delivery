export default {
  name: "map",
  title: "Map",
  type: "document",
  fields: [
    {
      name: "url",
      title: "URL",
      type: "string",
    },
    {
      name: "mainImage",
      title: "Main image",
      type: "image",
      optiosns: {
        hotpot: true,
      },
    },
  ],
};
