export const mapQuery = `*[_type=="map" ][0]{
    "mainImage":  mainImage.asset->url,
    url,
  }`;
