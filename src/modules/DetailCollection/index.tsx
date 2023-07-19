import React from 'react';
import Cards from "@/components/Cards";
import styled from "@emotion/styled";
import Pagination from "@/components/Pagination";
import {getItemLocalStorage} from "@/utils/funcLocalStorage";
import {useRouter} from "next/router";

const ListComponent = styled.div`
  max-width: 1440px;
  padding: 0 16px;
  margin: auto;
  & .list-cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 16px;
  }
`
const Collection = () => {
  const {query: {id}} = useRouter()
  const collections = getItemLocalStorage("collection")

  return (
    <ListComponent>
      <h1>List Collection {collections[Number(id)].name}</h1>
      <div className='list-cards'>
        {collections[Number(id)].data.map((item:any, idx:number) => (
          <Cards path={`/detail/${item?.id}`} key={idx} title={item?.title.romaji} image={item?.bannerImage}/>
        ))}
      </div>
      <Pagination currentPage={1} lastPage={2} onChange={(page) => console.log(page)}/>
    </ListComponent>
  );
}

export default Collection;