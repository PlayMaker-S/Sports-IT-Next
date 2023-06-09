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
