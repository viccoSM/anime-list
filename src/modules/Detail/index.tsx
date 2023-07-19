import React from 'react';
import styled from "@emotion/styled";
import {colors} from "@/utils/constant";
import {useRouter} from "next/router";
import {useGetDetailAnime} from "@/services/actions/getDetailAnime";
import {handleErrorImg} from "@/utils/images";
import SkeletonLoading from "@/components/SkeletonLoading";

const DetailComponent = styled.div`
  max-width: 1284px;
  padding: 0 16px;
  margin: auto;
  & .detail-content{
    display: flex;
    flex-flow: column;
    align-items: center;
    & .detail-info{
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      gap: 24px;
      justify-content: center;
    }
    & .card-info{
      border: 1px solid ${colors.secondary};
      border-radius: 12px;
      padding: 16px;
      flex-grow: 1;
      & .card-description{
        max-width: 600px;
      }
      & .card-genre{
        display: flex;
        gap: 8px;
        font-weight: 600;
      }
    }
    & .card-image{
      max-width: 320px;
      height: 240px;
      overflow: hidden;
      border-radius: 10px;
      & img{
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
  }
}
`
const Detail = () => {
  const {query: {id}} = useRouter()

  const {data, loading} = useGetDetailAnime({id: Number(id)})

  return (
    <DetailComponent>
      <SkeletonLoading isLoading={loading}>
      <div className='detail-content'>
        <h1>{data?.Media.title.romaji}</h1>
        <div className='detail-info'>
            <div className='card-image'>
              <img src={data?.Media.bannerImage || '/images/default-img.png'} onError={handleErrorImg} alt=""/>
            </div>
          <div className='card-info'>
            <div className="card-description" dangerouslySetInnerHTML={{__html: data?.Media.description}}/>
            <div className="card-genre">
              {data?.Media.genres.map((item:string, idx:number) => <p key={idx}>{item},</p>)}
            </div>
            <div>
              <p>Rating: {data?.Media.averageScore}/100</p>
              <p>Episode: {data?.Media.episodes}</p>
            </div>
          </div>
        </div>
      </div>
      </SkeletonLoading>
    </DetailComponent>
  );
}

export default Detail;