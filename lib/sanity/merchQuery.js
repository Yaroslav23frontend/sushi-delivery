function queryMain(category, range = "") {
  return `
*[_type=="merch" && "${category}" in categories[]->title]${range}{
    name,
    description,
    price,
    "id": _id,
    "image": image.asset->url,
    currency,
    categories[] -> {
      title,
      slug {
        current
      }
      }
  }`;
}
export const merchQueryMainSets = queryMain("Sushi Sets", `[0..3]`);
export const merchQueryMainNigiri = queryMain("Nigiri Sushi", `[0..3]`);
export const merchQueryMainRolls = queryMain("Sushi Rolls", `[0..3]`);
export const merchQueryMainDrinks = queryMain("Drinks", `[0..3]`);
export const merchQuerySets = queryMain("Sushi Sets");
export const merchQueryNigiri = queryMain("Nigiri Sushi");
export const merchQueryRolls = queryMain("Sushi Rolls");
export const merchQueryDrinks = queryMain("Drinks");
