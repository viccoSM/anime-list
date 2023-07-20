import React, {useState} from 'react';
import Cards from "@/components/Cards";
import styled from "@emotion/styled";
import {getItemLocalStorage} from "@/utils/funcLocalStorage";
import {Edit3, Trash} from "react-feather";
import {colors} from "@/utils/constant";
import ModalEditCollection from "@/components/ModalEditCollection";
import {editCollection} from "@/services/actions/editCollection";
import useModalAlert from "@/context/hooksContext/modal-alert";
import {deleteCollection} from "@/services/actions/deleteCollection";

const ListComponent = styled.div`
  max-width: 1440px;
  padding: 0 16px;
  margin: auto;
  & h1{
    margin: 12px 0;
  }

  & .list-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 20px;
    justify-items: center;

    & .card-info {
      display: flex;
      justify-content: space-between;
      margin-top: 4px;
    }

    & .card-action {
      display: flex;
      gap: 8px;

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
const ListCollection = () => {
  const collections = getItemLocalStorage("collection")
  const {showModalAlert, hideModalAlert} = useModalAlert()

  const [name, setName] = useState("")
  const [idx, setIdx] = useState<number | null>(0)
  const [isShow, setIsShow] = useState(false)

  const handleShowModal = (id: number | null = null) => {
    setIdx(id)
    setIsShow(!isShow)
  }

  const handleSubmit = () => {
    editCollection(name, Number(idx))

    handleShowModal()
  }

  const handleDeleteCollections = (idx:number) => {
    showModalAlert("Are you sure?", () => {
      deleteCollection(idx)
      hideModalAlert()
    })
  }
  return (
    <ListComponent>
      <h1>List Collection</h1>

      {collections.length > 0 ? (
        <div className='list-cards'>
          {collections.map((item: any, idx: number) => (
            <div key={idx}>
              <Cards path={`/collections/${idx}`} image={item?.data[0]?.bannerImage}/>
              <div className='card-info'>
                <h4>{item.name}</h4>
                <div className='card-action'>
                  <button onClick={() => handleShowModal(idx)}>
                    <Edit3 size={20} color={colors.secondary}/>
                  </button>
                  <button onClick={() => handleDeleteCollections(idx)}>
                    <Trash size={20} color={colors.danger}/>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="empty-content">
          <h4>Sorry, the collection list is currently empty.</h4>
        </div>
      )}
      <ModalEditCollection
        onClose={handleShowModal}
        onChange={(val) => setName(val)}
        onSubmit={handleSubmit}
        isShow={isShow}
      />
    </ListComponent>
  );
}

export default ListCollection;