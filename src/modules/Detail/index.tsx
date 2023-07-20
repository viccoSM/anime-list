import React, {useEffect, useState} from 'react';
import styled from "@emotion/styled";
import {colors} from "@/utils/constant";
import {useRouter} from "next/router";
import {useGetDetailAnime} from "@/services/actions/getDetailAnime";
import {handleErrorImg} from "@/utils/images";
import SkeletonLoading from "@/components/SkeletonLoading";
import Button from "@/components/Button";
import ModalAddCollection from "@/components/ModalAddCollection";
import {addNewCollection, addToCollection} from "@/services/actions/addCollection";
import {getItemLocalStorage} from "@/utils/funcLocalStorage";
import Link from "next/link";

const DetailComponent = styled.div`
  max-width: 1284px;
  padding: 0 16px;
  margin: auto;
  margin-bottom: 40px;
  & h1{
    margin: 12px 0;
  }
  & .detail-content {
    display: flex;
    flex-flow: column;
    align-items: center;

    & .detail-info {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      gap: 24px;
      justify-content: center;
    }

    & .card-info {
      border: 1px solid ${colors.secondary};
      border-radius: 12px;
      padding: 16px;
      flex-grow: 1;

      & .card-description {
        max-width: 600px;
      }

      & .card-genre {
        font-weight: 600;
      }
      
      & .card-collection {
        
      }
    }

    & .card-image {
      max-width: 320px;
      height: 240px;
      overflow: hidden;
      border-radius: 10px;

      & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
`
const Detail = () => {
  const {query: {id}} = useRouter()
  const collections = getItemLocalStorage("collection")

  const [isModal, setIsModal] = useState(false)
  const [name, setName] = useState("")
  const [idSelect, setIdSelect] = useState("")
  const [collected, setCollected] = useState<{ [key: string]: any }[]>([])

  const {data, loading} = useGetDetailAnime({id: Number(id)})

  const isCollected = () => {
    const result: { [key: string]: any }[] = [];

    collections.forEach((item:any) => {
      if(item?.data.some((dataCollection: any) => dataCollection.id === Number(id))){
        result.push(item)
      }
    })

    setCollected(result || [])
  }

  const handleShowModal = () => setIsModal(!isModal)

  const handleSubmit = () => {
    if(name) addNewCollection(name, [data.Media])
    if(idSelect) addToCollection(Number(idSelect), [data.Media])

    handleShowModal()
  }

  useEffect(() =>{
    isCollected()
  }, [collections.length])

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
                <p>{data?.Media.genres.map((item: string) => item + ", ")}</p>
              </div>
              <div>
                <p>Rating: {data?.Media.averageScore}/100</p>
                <p>Episode: {data?.Media.episodes}</p>
                {collected.length > 0 && (<>
                  <p>Collected: {collected.map((item:any, idx) => <Link key={idx} href={`/collections/${item.id}`}>{item.name}, </Link>)}</p>
                </>)}
              </div>
              <Button onClick={() => setIsModal(!isModal)} themes='secondary'>
                Add Collect
              </Button>
            </div>
          </div>
        </div>
      </SkeletonLoading>
      <ModalAddCollection
        onClose={handleShowModal}
        onChange={(val) => setName(val) }
        onSubmit={handleSubmit}
        isShow={isModal}
        onChangeSelect={(val) => setIdSelect(val)}
      />
    </DetailComponent>
  );
}

export default Detail;