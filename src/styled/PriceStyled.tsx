import styled from 'styled-components';

import {
  HEADER_BACKGROUND_COLOR,
  HEADER_ACCENT_COLOR,
} from '@src/styled';

export const PriceWrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 185px);
  margin-bottom: 30px;
  background-color: #ccc;
`;

export const PriceMenu = styled.ul`
  width: 100%;
`;

export const PriceMenuItem = styled.li`
  display: inline-block;
  vertical-align: top;
  width: ${(props: {width: string}) => (props.width + '%')};
  height: 40px;
  list-style-type: none;
  list-style-position: inside;
`;

interface IPriceMenuAnchorProps {
  isActive: boolean,
  isLast: boolean,
}

export const PriceMenuAnchor = styled.a`
  text-decoration: none;
  height: 40px;
  display: block;
  position: relative;
  box-sizing: border-box;
  line-height: ${(props: IPriceMenuAnchorProps) => (
    props.isActive ? '37px' : '40px'
  )};
  font-size: 12px;
  white-space: pre-line;
  text-align: center;
  background-color: ${(props: IPriceMenuAnchorProps) => (
    props.isActive ? '#fff' : HEADER_BACKGROUND_COLOR
  )};
  cursor: pointer;
  border-right: ${(props: IPriceMenuAnchorProps) => (
    props.isLast ? 'none' : '1px solid ' + HEADER_ACCENT_COLOR
  )};
  border-top: ${(props: IPriceMenuAnchorProps) => (
    props.isActive ? '3px solid ' + HEADER_ACCENT_COLOR : 'none'
  )};
  &::before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    transition: ${(props: IPriceMenuAnchorProps) => (
      props.isActive ? 'none' : 'width .25s ease-in'
    )};
    background-color: ${ HEADER_ACCENT_COLOR };
    width: 0;
    height: 3px;
  }
  &:hover {
    &::before {
      width: ${(props: IPriceMenuAnchorProps) => (
        props.isActive ? '0' : '100%'
      )};
    }
  }
`;
