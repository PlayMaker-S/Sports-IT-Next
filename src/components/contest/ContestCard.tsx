import React from "react";
import styled from "styled-components";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useRouter } from "next/router";

const Contest = styled.div`
  display: flex;
  /* flex-direction: column; */
  align-items: center;
`;

const ContestTopArea = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const TagArea = styled.div`
  display: flex;
`;

const Tag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 25px;
  padding: 2px 7px;
  background: #f9f9fa;
  border-radius: 20px;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  color: #747474;
  margin-right: 5px;
`;

const ContestTitle = styled.span`
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  color: #212121;
  margin-bottom: 6px;
`;

const ContestHost = styled.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #747474;
  margin-bottom: 12px;
`;

const ContestDate = styled.span`
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  color: #747474;
`;

const ScrapIcon = styled(AiOutlineHeart)`
  width: 25px;
  height: 23px;
  color: #aeaeae;
`;

const ScrapActiveIcon = styled(AiFillHeart)`
  width: 25px;
  height: 23px;
  color: #fd3446;
`;

const ContestImage = styled.img`
  width: 72px;
  height: 96px;
  margin-right: 17px;
`;

const RightArea = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0;
  cursor: pointer;
`;

interface ContestCardProps {
  tags: string[];
  scrap: boolean;
  title: string;
  host: string;
  date: string;
  contestId: number;
  imageUrl?: string;
}

const ContestCard = ({
  tags,
  scrap,
  title,
  host,
  date,
  contestId,
  imageUrl,
}: ContestCardProps) => {
  const router = useRouter();
  return (
    <Contest onClick={() => router.push(`/contest/${contestId}`)}>
      <ContestImage src={imageUrl} />
      <RightArea>
        <ContestTopArea>
          <TagArea>
            {tags.map((tag, index) => (
              <Tag key={index}>{tag}</Tag>
            ))}
          </TagArea>
          {/* {scrap ? <ScrapActiveIcon /> : <ScrapIcon />} */}
        </ContestTopArea>
        <ContestTitle>{title}</ContestTitle>
        <ContestHost>{host}</ContestHost>
        <ContestDate>{date}</ContestDate>
      </RightArea>
    </Contest>
  );
};

export default ContestCard;
