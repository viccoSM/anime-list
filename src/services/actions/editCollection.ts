import {getItemLocalStorage} from "@/utils/funcLocalStorage";

export const editCollection = (name: string, idx: number) => {
  const collections = getItemLocalStorage("collection")

  collections[idx].name = name

  localStorage.setItem('collection', JSON.stringify(collections));
}
