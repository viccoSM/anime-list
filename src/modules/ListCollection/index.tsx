import React from 'react';
import Cards from "@/components/Cards";
import styled from "@emotion/styled";
import Pagination from "@/components/Pagination";
import {getItemLocalStorage} from "@/utils/funcLocalStorage";

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
const ListCollection = () => {
  const collections = getItemLocalStorage("collection")
  return (
    <ListComponent>
      <h1>List Collection</h1>
      <div className='list-cards'>
        {collections.map((item:any, idx:number) => (
          <Cards path={`/collections/${idx}`} key={idx} title={item.name} image={item?.data[0]?.bannerImage}/>
        ))}
      </div>
      <Pagination currentPage={1} lastPage={2} onChange={(page) => console.log(page)}/>
    </ListComponent>
  );
}

export default ListCollection;