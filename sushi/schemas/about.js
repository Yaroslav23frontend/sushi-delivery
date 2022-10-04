export default {
  name: "about",
  title: "About",
  type: "document",
  fields: [
    {
      name: "mainImage",
      title: "Main image",
      type: "image",
      optiosns: {
        hotpot: true,
      },
    },
    {
      name: "body",
      title: "Body",
      type: "text",
    },
  ],
};
