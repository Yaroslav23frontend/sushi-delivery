export const searchQuery = `
    *[_type == "merch" && name match $q]{
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
