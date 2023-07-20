import {getItemLocalStorage} from "@/utils/funcLocalStorage";

export const deleteCollection = (idx: number) => {
  const collections = getItemLocalStorage("collection")

  const newCollections = [...collections]

  newCollections.splice(idx, 1)

  localStorage.setItem('collection', JSON.stringify(newCollections));
}

export const deleteItemCollection = (idxCollection: number, idxItem: number) => {
  const collections = getItemLocalStorage("collection")

  const newData = [...collections[idxCollection].data]
  newData.splice(idxItem, 1)

  collections[idxCollection].data = newData
  localStorage.setItem('collection', JSON.stringify(collections));
}
