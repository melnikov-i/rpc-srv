/**
 * Стилизованные компоненты шапки сайта
 */

import styled from 'styled-components';

import {
  HEADER_BACKGROUND_COLOR,
  MAIN_CONTAINER_MAX_WIDTH,
  HEADER_ACCENT_COLOR,
  HEADER_LOGO_WIDTH,
  MILLDE_SCREEN_MIN,
  MIDDLE_SCREEN_MAX,
  SMALL_SCREEN_MAX,
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
  width: 100%;
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
  padding: 10px;
  box-sizing: border-box;

`;

export const HeaderLogoTextBlock = styled.div`
  display: inline-block;
  vertical-align: top;
  width: 150px;
  margin-left: 8px;
  height: 80px;
`;

export const HeaderLogoCompanyName = styled.span`
  display: block;
  height: 40px;
  line-height: 50px;
  font-family: 'Orbitron', sans-serif;
  font-weight: 700;
  font-size: 22px;
`;

export const HeaderLogoSlogan = styled.span`
  display: block;
  height: 40px;
  line-height: 25px;
  font-size: 14px;
  color: ${ HEADER_ACCENT_COLOR };
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

/**
 * Обертка блока элементов верхнего меню шапки
 */
export const HeaderElementsWrapper = styled.div`
  width: 100%;
  height: 65px;
  position: relative;

`;

/**
 * Обертка для логотипов производителей автомобилей
 */
export const HeaderCarsManufacturers = styled.div`
  height: 45px;
  display: inline-block;
  vertical-align: top;
  padding: 10px 0 0 20px;
  box-sizing: border-box;
`;

/**
 * Изображения логотипов компаний автопроизводителей
 */
export const HeaderCarsManufacturersLogo = styled.img`
  height: 40px;
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
  @media screen
    and (max-width: ${SMALL_SCREEN_MAX}) {
      display: none;
    }
`;

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
  )};
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
  @media screen
    and (min-width: ${MILLDE_SCREEN_MIN})
    and (max-width: ${MIDDLE_SCREEN_MAX}) {
      padding: 8px;
      height: 44px;
      &::after {
        height: 28px;
      }
    )};
  }
`;

/**
 * Обертка содержимого для ссылки верхнего меню
 */
export const HeaderTopMenuAnchorContentWrapper =
styled(HeaderTopMenuTextContentWrapper)`
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
  @media screen
    and (min-width: ${MILLDE_SCREEN_MIN})
    and (max-width: ${MIDDLE_SCREEN_MAX}) {
      height: 28px;
      &::before {
        margin: 0;
        font-size: 28px;
      }
    )};
  }
`;

/**
 * Обертка текстовых блоков
 */
export const HeaderTopMenuAnchorTextWrapper = styled.div`
  display: inline-block;
  vertical-align: top;
  @media screen
    and (min-width: ${MILLDE_SCREEN_MIN})
    and (max-width: ${MIDDLE_SCREEN_MAX}) {
      display: ${(props: { hiddenOnMiddleScreen: boolean}) => (
        props.hiddenOnMiddleScreen ? 'inline-block' : 'none'
      )};
    }
`;

/**
 * Верхний текстовый блок с обычным шрифтом
 */
export const HeaderTopMenuAnchorLightText = styled.span`
  display: block;
  font-size: 9px;
  color: #fff;
`;

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
  @media screen
    and (min-width: ${MILLDE_SCREEN_MIN})
    and (max-width: ${MIDDLE_SCREEN_MAX}) {
      font-size: 24px;
    }
`;

/**
 * Обертка основного меню страницы
 */

export const HeaderMenu = styled.ul`
  width: 100%;

`;

export const HeaderMenuItem = styled.li`
  list-style-type: none;
  list-style-position: inside;
  display: inline-block;
  vertical-align: top;
`;

export const HeaderMenuAnchorWrapper = styled.div`
`;

export const HeaderMenuAnchor = styled.a`
  display: block;
  text-decoration: none;
  font-size: 14px;
  line-height: 35px;
  color: #fff;
  height: 35px;
  position: relative;
  padding: 0 20px 0 10px;
  margin-left: 10px;
  cursor: pointer;
  &::before {
    content: "";
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    transition: width .25s ease-in;
    background-color: ${ HEADER_ACCENT_COLOR };
    width: 0;
    height: 4px;
  }
  &:hover {
    color: ${ HEADER_ACCENT_COLOR };
    &::before {
      width: 100%;
    }
  }
`;
