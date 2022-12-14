///studio/schemas/merch.js
export default {
  name: "merch",
  title: "Merch",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "categories",
      title: "Categories",
      type: "array",
      of: [
        {
          type: "reference",
          to: { type: "category" },
        },
      ],
    },
    {
      name: "discounts",
      title: "Discounts",
      type: "array",
      of: [
        {
          type: "reference",
          to: { type: "discounts" },
        },
      ],
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },

    {
      name: "price",
      title: "Price",
      description: "For now, add cents as zeroes, ie 500 = $5",
      type: "number",
    },
    {
      name: "currency",
      title: "Currency",
      description: "Keep this 'usd' for the purposes of this tutorial",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
  initialValue: {
    currency: "usd",
  },
};
