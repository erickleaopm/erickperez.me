export const splitPascalCase = word => {
  return word.match(/($[a-z])|[A-Z][^A-Z]+/g).join("-")
}
