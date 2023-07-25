export const sliceProductName = (name: string, maxCharacters = 48) => {
  return name.length > maxCharacters ? name.slice(0, maxCharacters).concat("...") : name
}
