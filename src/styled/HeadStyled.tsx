/**
 * Стилизованные компоненты шапки сайта
 */

import styled from 'styled-components';

import {
  HEADER_BACKGROUND_COLOR,
  MAIN_CONTAINER_MAX_WIDTH,
} from '@src/styled';


/**
 * Корневой контейнер шапки сайта
 *
 * @return {React.Component}
 */

export const HeaderWrapper = styled.div`
  position: fixed;
  display: block;
  margin-top: -100px;
  max-width: ${ MAIN_CONTAINER_MAX_WIDTH };
  width: calc(100% - 17px);
  height: 100px;
  background-color: ${ HEADER_BACKGROUND_COLOR };
`;


/**
 * Контейнер логотипа
 */

export const HeaderLogo = styled.div`
  width: 140px;
  height: 100px;
  display: inline-block;
  vertical-align: top;

background-color: rgba(127, 127, 127, .2);
`;


/**
 * Обертка контейнера элементов шапки сайта
 */

export const HeaderElementsAndMenuWrapper = styled.div`
  width: calc(100% - 140px);
  height: 100px;
  display: inline-block;
  vertical-align: top;

background-color: rgba(127, 0, 0, .4);
`;


/**
 * Обертка блока элементов верхнего меню шапки
 */

export const HeaderElementsWrapper = styled.div`
  width: 100%;
  height: 65px;
  position: relative;

background-color: rgba(0, 127, 0, .4);
`;


/**
 * Обертка для логотипов производителей автомобилей
 */

export const HeaderCarsManufacturers = styled.div`
  width: 195px;
  height: 65px;
  display: inline-block;
  vertical-align: top;

background-color: rgba(0, 255, 0, .2);
`;


/**
 * Обертка для контейнера верхнего меню
 */

export const HeaderTopMenuWrapper = styled.div`
  min-width: 100px;
  height: 36px;
  position: absolute;
  top: 0;
  right: 0;

background-color: rgba(0, 0, 255, .4);
`;


/**
 * Обертка основного меню страницы
 */

export const HeaderMenuWrapper = styled.div`
  width: 100%;
  height: 35px;

background-color: rgba(0, 0, 127, .4);
`;


/**
 * Обертка для карусели
 */

export const CarouselWrapper = styled.div`
  position: relative;
  display: block;
  margin-top: 100px;
  &::before {
    content: "";
    display: block;
    padding-top: 40%;
  }
`;


/**
 * Внутренняя обертка карусели. В сумме с внешней задают высоту блока
 * равную половине ширины.
 */

export const CarouselInnerWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

background-color: rgba(0, 0, 255, .2);
`;
