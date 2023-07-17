import React, {FC} from 'react';
import styled from "@emotion/styled";
import {ChevronLeft, ChevronRight} from "react-feather";
import {colors} from "@/utils/constant";

interface PaginationProps{
  currentPage: number
  lastPage: number
  onChange: (pageNumber: number) => void;
}

const PaginationComponent = styled.div`
  display: flex;
  padding: 24px 0;
  justify-content: space-between;
  align-items: center;
  max-width: 220px;
  margin: auto;
  & button{
    cursor: pointer;
    background: transparent;
    color: ${colors.primary};
    border: none;
    &:hover{
      color: ${colors.secondary};
    }
    &:disabled {
      color: ${colors.lightGray};
      opacity: 0.6;
      cursor: default;
    }
  }
`
const Pagination:FC<PaginationProps> = ({currentPage, lastPage, onChange}) => {
  const handlePrevPage = () => {
    if (currentPage > 1) {
      onChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < lastPage) {
      onChange(currentPage + 1);
    }
  };
  return (
    <PaginationComponent>
      <button disabled={currentPage === 1} onClick={handlePrevPage}><ChevronLeft/></button>
      <p>{currentPage}</p>
      <button disabled={currentPage === lastPage} onClick={handleNextPage}><ChevronRight/></button>
    </PaginationComponent>
  );
}

export default Pagination;