/**
 * Стилизованные компоненты шапки сайта
 */

import styled from 'styled-components';

import {
  HEADER_BACKGROUND_COLOR,
  MAIN_CONTAINER_MAX_WIDTH,
  HEADER_ACCENT_COLOR,
  HEADER_LOGO_WIDTH
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
  z-index: 100;
`;


/**
 * Контейнер логотипа
 */

export const HeaderLogo = styled.div`
  width: ${ HEADER_LOGO_WIDTH };
  height: 100px;
  display: inline-block;
  vertical-align: top;

background-color: rgba(127, 127, 127, .2);
`;


/**
 * Обертка контейнера элементов шапки сайта
 */

export const HeaderElementsAndMenuWrapper = styled.div`
  width: calc(100% - ${ HEADER_LOGO_WIDTH });
  height: 100px;
  display: inline-block;
  vertical-align: top;

`;
// background-color: rgba(127, 0, 0, .4);


/**
 * Обертка блока элементов верхнего меню шапки
 */

export const HeaderElementsWrapper = styled.div`
  width: 100%;
  height: 65px;
  position: relative;

`;
// background-color: rgba(0, 127, 0, .4);


/**
 * Обертка для логотипов производителей автомобилей
 */

export const HeaderCarsManufacturers = styled.div`
  height: 65px;
  display: inline-block;
  vertical-align: top;
  padding-top: 10px;
  box-sizing: border-box;
`;


/**
 * Изображения логотипов компаний автопроизводителей
 */

export const HeaderCarsManufacturersLogo = styled.img`
  height: 45px;
  margin-right: 10px;
`;


/**
 * Обертка для контейнера верхнего меню
 */

export const HeaderTopMenuWrapper = styled.div`
  height: 36px;
  position: absolute;
  top: 0;
  right: 0;

`;
// background-color: rgba(0, 0, 255, .4);
// min-width: 100px;


/**
 * Контейнер верхнего меню
 */

export const HeaderTopMenuList = styled.ul`
  width: 100%;
`;


/**
 * Элемент верхнего меню
 */

export const HeaderTopMenuListItem = styled.li`
  list-style-type: none;
  list-style-position: inside;
  display: inline-block;
  vertical-align: top;
`;


/**
 * Главный элемент верхнего меню
 */

export const HeaderTopMenuAnchor = styled.a`
  text-decoration: none;
`;


/**
 * Обертка содержимого для текста вернего меню
 */

export const HeaderTopMenuTextContentWrapper = styled.div`
  display: block;
  position: relative;
  padding: ${ ( props: { isLast: boolean } ) => (
      props.isLast ? '8px 30px 8px 10px' : '8px 10px'
    )
  };
  height: 36px;
  box-sizing: border-box;
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 0;
    width: 0;
    height: 20px;
    transform: translateY(-50%);
    border-right: ${ ( props: { isLast: boolean } ) => (
        props.isLast ? 'none' : '1px solid #fff'
      )
    };
    box-sizing: border-box;
  }
`;


/**
 * Обертка содержимого для ссылки верхнего меню
 */

export const HeaderTopMenuAnchorContentWrapper =
HeaderTopMenuTextContentWrapper.extend`
  cursor: pointer;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    transition: width .5s, opacity .5s;
    width: 0;
    opacity: 0;
    height: 4px;
    background-color: ${ HEADER_ACCENT_COLOR };
  }
  &:hover {
    &::before {
      width: 100%;
      opacity: 1;      
    }
  }
`;



/**
 * Блок с текстом и иконкой
 */

export const HeaderTopMenuAnchorContent = styled.div`
  height: 20px;
  &::before {
    content: "\\${ ( props: { icon: string } ) => props.icon }";
    display: inline-block;
    font-family: FontAwesome;
    font-size: 20px;
    font-weight: normal;
    color: #fff;
    margin-right: 10px;
  }
`;


/**
 * Обертка текстовых блоков
 */

export const HeaderTopMenuAnchorTextWrapper = styled.div`
  display: inline-block;
  vertical-align: top;
`;

/**
 * Верхний текстовый блок с обычным шрифтом
 */

export const HeaderTopMenuAnchorLightText = styled.span`
  display: block;
  font-size: 9px;
  color: #fff;
`;
  // line-height: .9;


/**
 * Нижний текстовый блок с жирным шрифтом
 */

export const HeaderTopMenuAnchorBoldText = styled.span`
  display: block;
  font-size: 10px;
  color: #fff;
  font-weight: bold;
  line-height: .9;
`;


/**
 * Текстовый блок для большого текста
 */

export const HeaderTopMenuText = styled.div`
  display: block;
  font-size: 18px;
  color: #fff;
  
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

