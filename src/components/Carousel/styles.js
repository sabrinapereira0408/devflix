import styled from 'styled-components';

export const Title = styled.h3`
  font-style: normal;
  font-weight: 500;
  font-size: 35px;
  line-height: 1;
  margin-bottom: 5px;

  @media (max-width: 800px) {
    font-size: 18px;
    /* padding: 10px; */
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
`

export const ExtraLink = styled.a`
  /* margin-bottom: 16px; */
  color: rgba(255, 255, 255, 0.4);
  text-decoration: none;
  transition: opacity .3s;
  &:hover,
  &:focus {
    opacity: .5;
  }
  @media (max-width: 800px) {
    display: block;
    margin-bottom: 16px;
    margin-left: 0;
  }
`;

export const VideoCardList = styled.ul`
  margin: 0;
  padding-left: 0;
  padding-bottom: 32px;
  list-style: none;
  display: flex;
  overflow-x: auto;
  flex-direction: row;
  
  li {
    margin-right: 16px;
  }

  ::-webkit-scrollbar {
    height: 6px;
    background-color: rgba(255,255,255, 0);
  }

  ::-webkit-scrollbar-track {
    background-color: #101010;
    height: 6px;
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: rgba(255, 255, 255, 0.2);
    transition: 0.2s;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: rgba(255, 255, 255, 0.3);
  }
`;

export const VideoCardGroupContainer = styled.section`
  color: white;
  min-height: 197px;
  margin-left: 5%;
  margin-bottom: 16px;
`;
