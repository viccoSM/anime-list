import {getItemLocalStorage} from "@/utils/funcLocalStorage";

export const deleteCollection = (id: string) => {
  const collections = getItemLocalStorage("collection")

  const newCollections = [...collections]

  const idx =  collections.findIndex((item:any) => item.id = id)

  newCollections.splice(idx, 1)

  localStorage.setItem('collection', JSON.stringify(newCollections));
}

export const deleteItemCollection = (id: string, idxItem: number) => {
  const collections = getItemLocalStorage("collection")
  const idx =  collections.findIndex((item:any) => item.id = id)

  const newData = [...collections[idx].data]
  newData.splice(idxItem, 1)

  collections[idx].data = newData
  localStorage.setItem('collection', JSON.stringify(collections));
}
