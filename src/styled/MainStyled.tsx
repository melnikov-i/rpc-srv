import styled from 'styled-components';

import {
  MAIN_CONTAINER_MAX_WIDTH,
} from '@src/styled';

export const MainWrapper = styled.div`
  max-width: ${ MAIN_CONTAINER_MAX_WIDTH };
  width: 100%;
  margin: 0 auto;
`;

export const MainBlockHeader = styled.h4`
  margin-bottom: 30px;
  font-size: 24px;
  letter-spacing: 1.6px;
  line-height: 36px;
  color: #3c3947;
  font-weight: 400;
  text-align: center;
`;
