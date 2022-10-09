export function filterQuery(filter, sort, perPage, page) {
  const filters = filter
    ? `*[_type == "merch"${
        filter &&
        filter !== "all" &&
        ` && "${filter}" in categories[]->slug.current`
      }]`
    : `*[_type == "merch"]`;
  console.log(page);
  // console.log(`
  //   ${filters} [${page ? page * perPage - perPage : 0}...${
  //   perPage ? page * perPage : 10
  // }] | order(price ${sort === "low" ? `asc` : `desc`}) {
  //   "total": count(*[_type == "merch"]),
  //       name,
  //       description,
  //       price,
  //       "id": _id,
  //       "image": image.asset->url,
  //       currency,
  //       discounts[] -> {
  //         rate,
  //         endDate,
  //         startDate
  //         }
  //   }`);
  return `
    ${filters} [${page ? page * perPage - perPage : 0}...${
    perPage ? page * perPage : 10
  }] | order(price ${sort === "low" ? `asc` : `desc`}) {
    "total": count(${filters}),
        name,
        description,
        price,
        "id": _id,
        "image": image.asset->url,
        currency,
        discounts[] -> {
          rate,
          endDate,
          startDate
          }
    }`;
}
