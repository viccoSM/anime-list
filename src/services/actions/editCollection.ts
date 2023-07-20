import {getItemLocalStorage} from "@/utils/funcLocalStorage";

export const editCollection = (name: string, id: string) => {
  const collections = getItemLocalStorage("collection")

  const idx =  collections.findIndex((item:any) => item.id = id)

  collections[idx].name = name

  localStorage.setItem('collection', JSON.stringify(collections));
}
