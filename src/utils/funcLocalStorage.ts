export const getItemLocalStorage = (name:string) => {
  const existingCollection:string | null = localStorage.getItem(name);
  return existingCollection ? JSON.parse(existingCollection) : []
}