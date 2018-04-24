import styled from 'styled-components';

import {
  HEADER_BACKGROUND_COLOR,
  // MAIN_CONTAINER_MAX_WIDTH,
  // HEADER_ACCENT_COLOR,
  // HEADER_LOGO_WIDTH
} from '@src/styled';

export const FooterWrapper = styled.div`
  width: 100%;
  margin: 50px 0;
  background-color: #f5f5f5;
  position: relative;

height: 300px;
`;

export const FooterScheduleWrapper = styled.div`
`;
export const FooterSchedule = styled.div`
  width: 100%;
  height: 100px;
  background-color: orange;
`;
export const FooterMapWrapper = styled.div`

`;
export const FooterMap = styled.div`
  width: 100%;
  height: 100px;
  background-color: green;
`;

export const FooterToTop = styled.div`
  width: 60px;
  height: 60px;
  position: absolute;
  bottom: 10px;
  right: 10px;
  background-color: ${ HEADER_BACKGROUND_COLOR };
  &::before {
    content: "\\f106";
    display: block;
    width: 60px;
    height: 60px;
    line-height: 55px;
    font-family: 'FontAwesome';
    font-size: 60px;
    color: #fff;
    text-align: center;
    cursor: pointer;
  }
`;
