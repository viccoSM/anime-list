import {getItemLocalStorage} from "@/utils/funcLocalStorage";
import {generateUniqueID} from "@/utils/utils";

export const addNewCollection = (name: string, data: any[]) => {
  const collection = getItemLocalStorage("collection")
  localStorage.setItem('collection', JSON.stringify([...collection, {
    name,
    id: generateUniqueID(),
    data: [...data]
  }]));
}

export const addToCollection = (idx: number, data: any[]) => {
  const collections = getItemLocalStorage("collection")

  data.forEach((item) => {
    if(!collections[idx].data.some((collectionItem: any) => collectionItem.id === item.id)){
      collections[idx].data.push(item)
    }
  })

  localStorage.setItem('collection', JSON.stringify(collections));
}