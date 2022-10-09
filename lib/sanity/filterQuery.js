export function filterQuery(filter, sort, perPage, page) {
  const filters = filter
    ? `*[_type == "merch"${
        filter &&
        filter !== "all" &&
        ` && "${filter}" in categories[]->slug.current`
      }]`
    : `*[_type == "merch"]`;
  console.log(`
  ${filters} [${page && page != 1 ? page * perPage - perPage - 1 : 0}...${
    perPage ? page * perPage - 1 : 9
  }] | order(price ${sort === "low" ? `asc` : `desc`}) {
  "total": count(*[_type == "merch"]),
      name,
      description,
      price,
      "id": _id,
      "image": image.asset->url,
      currency,
      promotion[] -> {
        promotion,
        }
  }`);
  return `
    ${filters} [${page ? page * perPage - perPage : 0}...${
    perPage ? page * perPage : 9
  }] | order(price ${sort === "low" ? `asc` : `desc`}) {
    "total": count(*[_type == "merch"]),
        name,
        description,
        price,
        "id": _id,
        "image": image.asset->url,
        currency,
        promotion[] -> {
          promotion,
          }
    }`;
}
