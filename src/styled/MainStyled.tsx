import styled from 'styled-components';

import {
  MAIN_CONTAINER_MAX_WIDTH,
} from '@src/styled';

export const MainWrapper = styled.div`
  max-width: ${ MAIN_CONTAINER_MAX_WIDTH };
  width: 100%;
  margin: 0 auto;
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
  color: #646464;
  margin: 20px 0 40px;
  text-align: center;
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
