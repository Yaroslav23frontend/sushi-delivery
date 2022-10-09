export const discountQuery = `*[_type=="discounts" && name=="Discounts of the week"][0]{
    startDate,
    endDate,
    rate,
    image,
    body,
      }`;
export const discountProductsQuery = `*[_type=="merch"&& "Discounts of the week" in discounts[]->name]{
    name,
    description,
    price,
    "id": _id,
    "image": image.asset->url,
    currency,
    discounts[] -> {
      rate,
      endDate,
      startDate,
      }
}`;
