import React, {useState} from 'react';
import Cards from "@/components/Cards";
import styled from "@emotion/styled";
import Pagination from "@/components/Pagination";
import {useGetListAnime} from "@/services/actions/getListAnime";
import SkeletonLoading from "@/components/SkeletonLoading";
import Checkbox from "@/components/Checkbox";
import Button from "@/components/Button";
import {addNewCollection, addToCollection} from "@/services/actions/addCollection";
import ModalAddCollection from "@/components/ModalAddCollection";

const ListComponent = styled.div`
  max-width: 1284px;
  padding: 0 16px;
  margin: auto;
  & h1{
    margin: 12px 0;
  }
  & .list-header{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  & .list-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 20px;
    justify-items: center;
    & .card{
      max-width: 220px;
    }
    
    & .card-action {
      margin-top: 4px;
      display: flex;
      gap: 4px;
      
      & h4{
        margin: 0
      }
    }
  }
`
const List = () => {
  const [page, setPage] = useState<number>(1)
  const [checkList, setCheckList] = useState<{[key:string]:any}[]>([])
  const [isModal, setIsModal] = useState(false)
  const [name, setName] = useState("")
  const [idSelect, setIdSelect] = useState("")

  const {data, loading} = useGetListAnime({page, limit: 10})

  const handleCheckbox = (item: any, isCheck:boolean) => {
    if(isCheck){
      setCheckList([...checkList, item])
    } else{
      const indexItem = checkList.findIndex((checkItem) => checkItem.id === item.id)
      const newList = [...checkList]
      newList.splice(indexItem, 1)

      setCheckList(newList)
    }
  }

  const handleShowModal = () => setIsModal(!isModal)

  const handleSubmit = () => {
    if(name) addNewCollection(name, checkList)
    if(idSelect) addToCollection(Number(idSelect), checkList)

    handleShowModal()
    setCheckList([])
  }

  return (
    <ListComponent>
      <div className="list-header">
        <h1>List Anime</h1>
        {checkList.length > 0 && (
          <Button onClick={() => setIsModal(!isModal)} themes='secondary'>
            Add Collect
          </Button>
        )}
      </div>
      <SkeletonLoading isLoading={loading}>
        <div className='list-cards'>
          {data?.Page.media.map((item:any, idx:number) => (
            <div className="card" key={idx}>
              <Cards image={item.bannerImage} path={`/detail/${item.id}`}/>
              <div className='card-action'>
                <Checkbox checked={checkList.some((check) => check.id === item.id)} onChange={(isCheck) => handleCheckbox(item, isCheck)}/>
                <h4>{item.title.romaji}</h4>
              </div>
            </div>
          ))}
        </div>
      </SkeletonLoading>
      <Pagination currentPage={page} lastPage={data?.Page.pageInfo.lastPage} onChange={(resPage) => setPage(resPage)}/>
      <ModalAddCollection
        onClose={handleShowModal}
        onChange={(val) => setName(val) }
        onSubmit={handleSubmit}
        isShow={isModal}
        onChangeSelect={(val) => setIdSelect(val)}
      />
    </ListComponent>
  );
}

export default List;