import React from "react";
import styled from "styled-components";

const LoadingContianer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Loading = () => {
  return (
    <LoadingContianer>
      <p>Loading...</p>
    </LoadingContianer>
  );
};
