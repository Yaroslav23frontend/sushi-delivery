export const merchQuery = `*[_type=="merch" ]{
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
