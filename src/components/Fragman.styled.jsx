import styled from "styled-components";

export const FragmanSection = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 50px;
  position: relative;
  padding-top: 75%;
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }
`;
