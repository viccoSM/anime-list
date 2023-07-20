import React from 'react';
import Cards from "@/components/Cards";
import styled from "@emotion/styled";
import {getItemLocalStorage} from "@/utils/funcLocalStorage";
import {useRouter} from "next/router";
import {Trash} from "react-feather";
import {colors} from "@/utils/constant";
import useModalAlert from "@/context/hooksContext/modal-alert";
import {deleteItemCollection} from "@/services/actions/deleteCollection";

const ListComponent = styled.div`
  max-width: 1440px;
  padding: 0 16px;
  margin: auto;

  & h1 {
    margin: 12px 0;
  }

  & .list-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 20px;
    justify-items: center;
    
    & .card{
      max-width: 220px;
    }

    & .card-info {
      display: flex;
      justify-content: space-between;
      margin-top: 4px;

      & button {
        background: transparent;
        border: none;
        padding: 0;
        margin: 0;
      }
    }
  }

  & .empty-content {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
  }
`
const Collection = () => {
  const {query: {id}} = useRouter()
  const {showModalAlert, hideModalAlert} = useModalAlert()
  const collections = getItemLocalStorage("collection")

  const findCollection = () => {
    return collections.find((item: any) => item.id === id)
  }

  const handleDeleteItem = (idx: number) => {
    showModalAlert("Are you sure?", () => {
      deleteItemCollection(String(id), idx)
      hideModalAlert()
    })
  }

  return (
    <ListComponent>
      <h1>List Collection {findCollection().name}</h1>

      {findCollection().data.length > 0 ? (
        <div className='list-cards'>
          {findCollection().data.map((item: any, idx: number) => (
            <div className='card' key={idx}>
              <Cards path={`/detail/${item?.id}`} key={idx} image={item?.bannerImage}/>
              <div className='card-info'>
                <h4>{item.title.romaji}</h4>
                <button onClick={() => handleDeleteItem(idx)}>
                  <Trash size={20} color={colors.danger}/>
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="empty-content">
          <h4>Sorry, the collection list is currently empty.</h4>
        </div>
      )}
    </ListComponent>
  );
}

export default Collection;