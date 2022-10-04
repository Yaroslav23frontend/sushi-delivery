export default {
  name: "promotion",
  title: "Promotion",
  type: "document",
  fields: [
    { name: "name", title: "Name", type: "string" },
    {
      name: "startDate",
      title: "Start Date",
      type: "datetime",
    },
    {
      name: "endDate",
      title: "End Date",
      type: "datetime",
    },
    {
      name: "promotion",
      title: "Promotion(%)",
      type: "number",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "body",
      title: "Body",
      type: "text",
    },
  ],
};
