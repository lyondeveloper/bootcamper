import styled from 'styled-components';

export const ShowcaseContainer = styled.div`
  position: relative;
  background: ${({ imageUrl }) => `url(${imageUrl})`} no-repeat center
    center/cover;
  min-height: 100vh;
  color: #fff;
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
