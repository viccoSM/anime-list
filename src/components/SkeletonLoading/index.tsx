import React, {FC, ReactNode} from 'react';
import styled from "@emotion/styled";
import {Loader} from "react-feather";
import {colors} from "@/utils/constant";

interface LoadingProps {
  isLoading: boolean
  children: ReactNode
}

const LoadingComponent = styled.div`
  width: 100%;
  min-height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  & .spinner {
    animation: spin 1s linear infinite;
  }
`

const SkeletonLoading:FC<LoadingProps> = ({isLoading, children}) => {
  if(isLoading) {
    return (
      <LoadingComponent>
        <Loader className="spinner" color={colors.primary}/>
      </LoadingComponent>
    );
  }
  return <>{children}</>
}

export default SkeletonLoading;