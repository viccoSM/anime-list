import React, {useState} from 'react';
import Cards from "@/components/Cards";
import styled from "@emotion/styled";
import Pagination from "@/components/Pagination";
import {useGetListAnime} from "@/services/actions/getListAnime";
import SkeletonLoading from "@/components/SkeletonLoading";

const ListComponent = styled.div`
  max-width: 1284px;
  padding: 0 16px;
  margin: auto;
  & .list-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 20px;
    justify-items: center;
  }
`
const List = () => {
  const [page, setPage] = useState<number>(1)
  const {data, loading} = useGetListAnime({page, limit: 10})

  return (
    <ListComponent>
      <h1>List Anime</h1>
      <SkeletonLoading isLoading={loading}>
        <div className='list-cards'>
          {data?.Page.media.map((item:any, idx:number) => (
            <Cards image={item.bannerImage} path={`/detail/${item.id}`} key={idx} title={item.title.romaji}/>
          ))}
        </div>
      </SkeletonLoading>
      <Pagination currentPage={page} lastPage={data?.Page.pageInfo.lastPage} onChange={(resPage) => setPage(resPage)}/>
    </ListComponent>
  );
}

export default List;