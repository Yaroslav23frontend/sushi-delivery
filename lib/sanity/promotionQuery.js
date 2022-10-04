export const promotionQuery = `*[_type=="promotion" && name=="Week promotion"][0]{
    startDate,
    endDate,
    promotion,
    "image": image.asset->url,
    body,
      }`;
export const promotionProductsQuery = `*[_type=="merch"&& "Week promotion" in promotion[]->name]{
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
