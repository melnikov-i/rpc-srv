/**
 * Стилизованные компоненты шапки сайта
 */

import styled from 'styled-components';

import {
  HEADER_BACKGROUND_COLOR
} from '@src/styled';


/**
 * Корневой контейнер шапки сайта
 *
 * @return {React.Component}
 */

export const HeaderLayout = styled.div`
  position: fixed;
  display: block;
  box-sizing: border-box;
  padding: 0 20px;
  max-width: 1280px;
  width: calc(100% - 17px);
  height: 100px;
  background-color: ${ HEADER_BACKGROUND_COLOR };
`;


/**
 * Контейнер логотипа
 */

export const HeaderLogo = styled.div`
  width: 100px;
  height: 100px;
  display: inline-block;
  vertical-align: top;

background-color: rgba(127, 127, 127, .2);
`;


  // position: relative;
  // display: block;
  // &::before {
  //   content: "";
  //   display: block;
  //   padding-top: 50%;
  // }