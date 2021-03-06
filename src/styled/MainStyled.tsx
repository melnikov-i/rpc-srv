import styled from 'styled-components';

import {
  MAIN_CONTAINER_MAX_WIDTH,
  TEXT_COLOR,
} from '@src/styled';

export const MainWrapper = styled.div`
  max-width: ${ MAIN_CONTAINER_MAX_WIDTH };
  width: 100%;
  margin: 0 auto;
`;

export const MainBlockWraper = styled.div`
  margin: 20px 10px 40px;
`;

export const MainBlockHeader = styled.h2`
  margin-bottom: 30px;
  font-size: 24px;
  letter-spacing: 1.6px;
  line-height: 36px;
  font-weight: 400;
  text-align: center;
`;

export const MainBlockParagraph = styled.p`
  font-size: 16px;
  font-weight: normal;
  color: ${ TEXT_COLOR };
  text-align: center;
`;

export const MainBlockUList = styled.ul`
  width: 500px;
  margin: 0 auto;
`;

export const MainBlockListItem = styled.li`
  list-style-position: inside;
  font-size: 16px;
  font-weight: normal;
  line-height: 24px;
  color: ${ TEXT_COLOR };
`;

export const FooterScheduleRow = styled.p`
  font-size: 14px;
  line-height: 30px;
  &::before {
    content: "\\${(props: {icon: string}) => (props.icon)}";
    display: inline-block;
    vertical-align: top;
    width: 30px;
    height: 30px;
    line-height: 30px;
    font-family: 'FontAwesome';
    font-weight: normal;
    font-size: 22px;
    margin-right: 5px;
    text-align: center;
  }
`;
