import * as React from 'react';
import { injectGlobal } from 'styled-components';
import {
  Element,
  scroller,
  animateScroll,
} from 'react-scroll';

import {
  MainWrapper,
  HeaderWrapper,
  HeaderLogo,
  HeaderElementsAndMenuWrapper,
  HeaderElementsWrapper,
  HeaderCarsManufacturers,
  HeaderCarsManufacturersLogo,
  HeaderTopMenuWrapper,
  HeaderTopMenuList,
  HeaderTopMenuListItem,
  HeaderTopMenuAnchor,
  HeaderTopMenuTextContentWrapper,
  HeaderTopMenuAnchorContentWrapper,
  HeaderTopMenuAnchorContent,
  HeaderTopMenuAnchorTextWrapper,
  HeaderTopMenuAnchorLightText,
  HeaderTopMenuAnchorBoldText,
  HeaderTopMenuText,

  HeaderMenuWrapper,

  FooterWrapper,
  FooterScheduleWrapper,
  FooterSchedule,
  FooterMapWrapper,
  FooterMap,
  FooterToTop,
} from '@src/styled';

import CarouselConnected from '@src/usage/CarouselUsage';

/**
 * Импорт изображений
 */
const Renault = require('@src/images/renault');
const Peugeot = require('@src/images/peugeot');
const Citroen = require('@src/images/citroen');

/**
 * Импорт шрифтов FontAwesome 
 */
const FontAwesomeEOT = require('@src/fonts/fontawesome-webfont.eot');
const FontAwesomeWOFF2 = require('@src/fonts/fontawesome-webfont.woff2');
const FontAwesomeWOFF = require('@src/fonts/fontawesome-webfont.woff');
const FontAwesomeTTF = require('@src/fonts/fontawesome-webfont.ttf');
const FontAwesomeSVG = require('@src/fonts/fontawesome-webfont.svg');

/**
 * Глобальные стили 
 */
injectGlobal`
  * {
    margin: 0;
    padding: 0;
    font-size: 0;
    border: 0;
    font-family: 'Roboto', sans-serif;
  }

  @font-face {
    font-family: 'FontAwesome';
    src: url('${FontAwesomeEOT}?v=4.7.0');
    src: url('${FontAwesomeEOT}?#iefix&v=4.7.0') format('embedded-opentype'),
         url('${FontAwesomeWOFF2}?v=4.7.0') format('woff2'),
         url('${FontAwesomeTTF}?v=4.7.0') format('truetype'),
         url('${FontAwesomeWOFF}?v=4.7.0') format('woff'),
         url('${FontAwesomeSVG}?v=4.7.0#fontawesomeregular') format('svg');
    font-weight: normal;
    font-style: normal;
  }
`;

interface IMainProps {}

export const Main: React.SFC<IMainProps> = ( props ) => {
  /**
   * Данные для верхнего меню
   */
  const TopMenuData: any[] = [
    {
      text: '+7 (812) 642 1245',
      icon: 'f095',
      to: '',
    },
    {
      text: ['График', 'работы'],
      icon: 'f017',
      to: 'schedule',
    },
    {
      text: ['Схема', 'проезда'],
      icon: 'f041',
      to: 'map',
    },
  ];

  const handlerTopMenuAnchor = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    e.nativeEvent.stopImmediatePropagation();
    const elementName: string =
      String(e.currentTarget.getAttribute('data-to'));
    scroller.scrollTo(elementName, {
      smooth: 'easeInOutQart',
      duration: 1000,
      delay: 0,
    });
  };

  const handlerToTop = () => {
    animateScroll.scrollToTop();
  };

  return (
    <MainWrapper>
      {/* Шапка сайта */}
      <HeaderWrapper>
        {/* Логотип сайта */}
        <HeaderLogo>
        </HeaderLogo>
        {/* Все, что справа от логотипа */}
        <HeaderElementsAndMenuWrapper>
          {/* Верхний блок элементов */}
          <HeaderElementsWrapper>
            {/* Эмблемы производителей автомобилей */}
            <HeaderCarsManufacturers>
              <HeaderCarsManufacturersLogo
                src={Renault} alt={'Renault'} />
              <HeaderCarsManufacturersLogo
                src={Peugeot} alt={'Peugeot'} />
              <HeaderCarsManufacturersLogo
                src={Citroen} alt={'Citroen'} />
            </HeaderCarsManufacturers>
            {/* Верхнее меню */}
            <HeaderTopMenuWrapper>
              <HeaderTopMenuList>
                {/* Элементы верхнего меню */}
                {TopMenuData.map((e, i, a) => (
                  <HeaderTopMenuListItem key={i}>
                    {(typeof(e.text) === 'object') ? (
                      <HeaderTopMenuAnchor
                        data-to={e.to}
                        onClick={handlerTopMenuAnchor}
                      >
                        <HeaderTopMenuAnchorContentWrapper
                            isLast={i + 1 === a.length}
                          >
                            <HeaderTopMenuAnchorContent
                              icon={e.icon}
                            >
                              <HeaderTopMenuAnchorTextWrapper>
                                <HeaderTopMenuAnchorLightText>
                                  {e.text[0]}
                                </HeaderTopMenuAnchorLightText>
                                <HeaderTopMenuAnchorBoldText>
                                  {e.text[1]}
                                </HeaderTopMenuAnchorBoldText>
                              </HeaderTopMenuAnchorTextWrapper>
                            </HeaderTopMenuAnchorContent>
                          </HeaderTopMenuAnchorContentWrapper>
                      </HeaderTopMenuAnchor>
                    ) : (
                      <HeaderTopMenuTextContentWrapper
                        isLast={i + 1 === a.length}
                      >
                        <HeaderTopMenuAnchorContent
                          icon={e.icon}
                        >
                          <HeaderTopMenuAnchorTextWrapper>
                            <HeaderTopMenuText>
                              {e.text}
                            </HeaderTopMenuText>
                          </HeaderTopMenuAnchorTextWrapper>
                        </HeaderTopMenuAnchorContent>
                      </HeaderTopMenuTextContentWrapper>
                    )}
                  </HeaderTopMenuListItem>
                ))}
              </HeaderTopMenuList>
            </HeaderTopMenuWrapper>
          </HeaderElementsWrapper>
          {/* Блок меню страницы */}
          <HeaderMenuWrapper>
          </HeaderMenuWrapper>
        </HeaderElementsAndMenuWrapper>
      </HeaderWrapper>
      {/* Карусель */}
      <CarouselConnected />
      <FooterWrapper>
        <FooterScheduleWrapper>
          <Element name={'schedule'}>
            <FooterSchedule>
            </FooterSchedule>
          </Element>
        </FooterScheduleWrapper>
        <FooterMapWrapper>
          <Element name={'map'}>
            <FooterMap>
            </FooterMap>
          </Element>
        </FooterMapWrapper>
        <FooterToTop onClick={handlerToTop} />
      </FooterWrapper>
    </MainWrapper>
  );
};
