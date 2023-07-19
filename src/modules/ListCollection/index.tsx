import React from 'react';
import Cards from "@/components/Cards";
import styled from "@emotion/styled";
import Pagination from "@/components/Pagination";

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
  const arr = [
    {
      id: 1,
      title: 'Attack on titlan'
    },
    {
      id: 1,
      title: 'Attack on titlan'
    },
    {
      id: 1,
      title: 'Attack on titlan final bos season 3'
    },
    {
      id: 1,
      title: 'Attack on titlan'
    },
    {
      id: 1,
      title: 'Attack on titlan final bos season 3'
    }
  ]
  return (
    <ListComponent>
      <h1>List Collection Name</h1>
      <div className='list-cards'>
        {arr.map((item, idx) => (
          <Cards path={`/detail/${item.id}`} key={idx} title={item.title}/>
        ))}
      </div>
      <Pagination currentPage={1} lastPage={2} onChange={(page) => console.log(page)}/>
    </ListComponent>
  );
}

export default ListCollection;