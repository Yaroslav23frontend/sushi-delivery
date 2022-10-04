export const aboutQuery = `
*[_type=="about"][0]{
    "image": image.asset->url,
    body
 }
`;
