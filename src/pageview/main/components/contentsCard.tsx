import React from "react";
import styled from "styled-components";

const ContentsCardContainer = styled.div<{ color: string }>`
  /* Rectangle 7 */

  position: absolute;
  width: 235px;
  height: 264px;

  background: ${(props) => props.color};
  border-radius: 8px;
`;

// TODO: 콘텐츠카드 만들고, 색상 셋 정의하기
// 콘텐츠카드 만들면, 각 탭 만들기
