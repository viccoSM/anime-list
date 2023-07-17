import React, {FC, useState} from 'react';
import styled from "@emotion/styled";
import Link from "next/link";

interface CardsProps {
  path: string,
  title: string
}

interface CardImageProps {
  isHovered: boolean;
}

const CardsComponent = styled.div`
  display: flex;
  flex-flow: column;
  gap: 8px;
  align-items: center;
  position: relative;
  max-width: 185px;
  text-align: center;
  & .card-image{
    max-height: 260px;
    overflow: hidden;
    border-radius: 10px;
    & img{
      transition: transform 0.3s ease;
      width: 100%;
      height: 100%;
      object-fit: cover;
      transform: ${({ isHovered }: CardImageProps) =>
              isHovered ? 'scale(1.1)' : 'scale(1)'};
    }
    }
  }
  & .card-link{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
  & h4{
    margin: 0;
  }
`
const Cards:FC<CardsProps> = ({path, title}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <CardsComponent
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      isHovered={isHovered}
    >
      <div className='card-image'>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src='/images/aot-cover.jpeg' alt=""/>
      </div>
      <h4>{title}</h4>
      <Link href={path} className="card-link"/>
    </CardsComponent>
  );
}

export default Cards;