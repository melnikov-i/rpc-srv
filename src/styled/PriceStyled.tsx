import styled from 'styled-components';

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

export const PriceMenuAnchor = styled.a`
  text-decoration: none;
  height: 40px;
  display: block;
  position: relative;
  box-sizing: border-box;
  line-height: 40px;
  font-size: 12px;
  white-space: pre-line;
  text-align: center;
`;
