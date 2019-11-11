import styled from 'styled-components';

export const ShowcaseContainer = styled.div`
  width: 100%;
  position: relative;
  min-height: 100vh;
  color: #fff;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const ShowcaseInner = styled.div`
  text-align: center;
  padding-top: 20%;
  height: 100%;
  width: 80%;
  margin: auto;
`;

export const DarkOverlay = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
