import React from "react";
import styled from "styled-components";

interface ProfileProps {
  imageUrl: string;
  name: string;
  favorite: string;
}
const Wrapper = styled.div`
  width: 20%;
  display: inline-block;
  text-align: center;
  margin-right: 20px;
`;
const Image = styled.img`
  width: 100%;
  border-radius: 50%;
`;

const MainText = styled.div`
  font-weight: bolder;
  color: black;
  margin-top: 10%;
`;

const SubText = styled.div`
  font-size: 10%;
  color: gray;
  margin-top: 5%;
`;

const Profile: React.FC<ProfileProps> = ({ imageUrl, name, favorite }) => {
  return (
    <Wrapper>
      <Image alt="" src={imageUrl} />
      <MainText>{name}</MainText>
      <SubText>{favorite}</SubText>
    </Wrapper>
  );
};

export default Profile;
