import React from "react";
import styled from "styled-components";

import { AiOutlineRight } from "react-icons/ai";
import { useRouter } from "next/router";

interface NavTabProps {
  url: string;
  content: string;
}

const NavTabArea = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  background-color: #fd3446;
`;

const NavTabText = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #212121;
`;

const ArrowIcon = styled(AiOutlineRight)`
  height: 20px;
  width: 15px;
  color: #aeaeae;
`;

const NavTab = ({ url, content }: NavTabProps) => {
  const router = useRouter();
  return (
    <NavTabArea onClick={() => alert("준비중인 기능입니다 :)")}>
      <NavTabText>{content}</NavTabText>
      <ArrowIcon />
    </NavTabArea>
  );
};

export default NavTab;
