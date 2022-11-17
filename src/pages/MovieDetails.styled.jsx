import styled from "styled-components";

export const Main = styled.main`
  width: 80%;
  margin: 2rem auto;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.8);
  @media (max-width: 950px) {
    width: 100%;
  }
`;
export const Header = styled.header`
  width: 100%;
  padding: 1rem;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  background-color: rgba(26, 26, 26, 0.8);
  @media (max-width: 950px) {
    flex-wrap: wrap;
  }
`;
export const IMG = styled.img`
  width: 100%;
  background-color: rgba(26, 26, 26, 0.8);
`;
export const Tags = styled.div`
  width: 100%;
  padding: 2rem 1rem;
  gap: 1rem;
  font-weight: 500;
  display: flex;
  justify-content: flex-start;
  background-color: rgba(26, 26, 26, 0.8);
  @media (max-width: 950px) {
    flex-wrap: wrap;
  }
`;
export const Overview = styled.div`
  width: 100%;
  padding: 2rem 1rem;
  background-color: rgba(26, 26, 26, 0.8);
`;
export const Actors = styled.div`
  width: 100%;
  background-color: rgba(26, 26, 26, 0.8);
  padding: 2rem 1rem;
`;
