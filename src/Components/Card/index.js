import React from "react";
import styled from "styled-components";

const CardWrapper = styled.article`
  width: 30%;
`;
const ImageContainer = styled.div`
  width: 100%;
  img {
    width: 100%;
    border-radius: 4px;
  }
`;
const Title = styled.h3`
  font-size: 16px;
  font-weight: 700;
`;
const Card = () => {
  return (
    <CardWrapper>
      <ImageContainer>
        <img
          src="https://dummyimage.com/600x400/f20c68/ffffff.png"
          alt="Card"
        />
      </ImageContainer>
      <Title>Card</Title>
    </CardWrapper>
  );
};

export default Card;
