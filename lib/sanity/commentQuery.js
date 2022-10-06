export const commentQuery = `
*[_type=="comment" ]{
    name,
    email,
    comment,
     _createdAt
  }
`;
