import styled from "styled-components";

export const ContentArea = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
  padding-bottom: 15%;
`;

export const ContentPaddingArea = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
  padding: 0 15px;
  padding-bottom: 5%;
`;

export const ContentColumnArea = styled(ContentPaddingArea)`
  display: flex;
  flex-direction: column;
  padding-top: 12%;
`;

export const LeftSideBar = styled.div`
  width: 30vw;
  height: 100vh;
  @media (max-width: 1200px) {
    display: none;
  }
`;

export const RightSideBar = styled(LeftSideBar)``;
