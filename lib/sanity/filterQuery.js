export function filterQuery(filter, sort, perPage, page) {
  const filters = filter
    ? `*[_type == "merch"${
        filter &&
        filter !== "all" &&
        ` && "${filter}" in categories[]->slug.current`
      }]`
    : `*[_type == "merch"]`;

  return `
    ${filters} [${page ? (page - 1) * perPage : 0}..${
    perPage ? perPage + page - 1 : 9
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
