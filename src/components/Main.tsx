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
  HeaderLogoTextBlock,
  HeaderLogoCompanyName,
  HeaderLogoSlogan,
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
  HeaderMenu,
  HeaderMenuItem,
  HeaderMenuAnchor,

  MainBlockHeader,
  MainBlockParagraph,
  MainBlockUList,
  MainBlockListItem,
  MainBlockWraper,

  FooterWrapper,
  Footer,
  FooterScheduleWrapper,
  FooterSchedule,
  FooterMapWrapper,
  FooterMap,
  FooterToTop,
  FooterHeader,
  FooterScheduleRow,
} from '@src/styled';

import CarouselConnected from '@src/usage/CarouselUsage';
import PriceConnected from '@src/usage/PriceUsage';

/**
 * Импорт изображений
 */
const Renault = require('@src/images/renault');
const Peugeot = require('@src/images/peugeot');
const Citroen = require('@src/images/citroen');
const Logo = require('@src/images/logo');

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
    color: #3c3947;
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

  /**
   * Данные для основного меню
   */
  const MainMenuData: any[] = [
    {
      text: 'О НАС',
      to: 'about',
    },
    {
      text: 'УСЛУГИ И ЦЕНЫ',
      to: 'price',
    },
    {
      text: 'ГАРАНТИЯ',
      to: 'warranty',
    },
  ];

  /**
   * Диагностика ходовой бесплатно
   * При покупке масла и масленного фильтра, работы по замене масла бесплатно (экономия от 500 рублей)
   */

  const handlerMenuAnchor = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    e.nativeEvent.stopImmediatePropagation();
    const elementName: string =
      String(e.currentTarget.getAttribute('data-to'));
    scroller.scrollTo(elementName, {
      smooth: 'easeInOutQart',
      duration: 1000,
      delay: 0,
      offset: -120,
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
          <img src={Logo} alt={'RPC-Servis'} />
          <HeaderLogoTextBlock>
          <HeaderLogoCompanyName>
            {'RPC-Servis'}
          </HeaderLogoCompanyName>
          <HeaderLogoSlogan>
            {'Качество меняет все!'}
          </HeaderLogoSlogan>
          </HeaderLogoTextBlock>
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
                        onClick={handlerMenuAnchor}
                      >
                        <HeaderTopMenuAnchorContentWrapper
                            isLast={i + 1 === a.length}
                          >
                            <HeaderTopMenuAnchorContent
                              icon={e.icon}
                            >
                            <HeaderTopMenuAnchorTextWrapper
                              hiddenOnMiddleScreen={false}
                            >
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
                          <HeaderTopMenuAnchorTextWrapper
                            hiddenOnMiddleScreen={true}
                          >
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
          <HeaderMenu>
            {MainMenuData.map((e: any, i: number) => (
              <HeaderMenuItem key={i}>
                <HeaderMenuAnchor
                  onClick={handlerMenuAnchor}
                  data-to={e.to}
                >
                  {e.text}
                </HeaderMenuAnchor>
              </HeaderMenuItem>
            ))}
          </HeaderMenu>
        </HeaderElementsAndMenuWrapper>
      </HeaderWrapper>
      {/* Карусель */}
      <CarouselConnected />
      <Element name={'about'}>
        <MainBlockHeader>{'О НАС'}</MainBlockHeader>
        <MainBlockWraper>
          <MainBlockParagraph>
            {'RPS-Servis -- это оборудованная по современным стандартам'
            + ' станция технического обслуживания автомобией. В основном, мы'
            + ' предоставляем услуги по техническому обслуживанию и диагностике'
            + ' неисправностей автомобилей французского производства. Однако,'
            + ' компетенция наших сотрудником и техническая оснащенность станции'
            + ' позволяет предоставлять все виды услуг для европейских, японских'
            + ' и корейских автомобилей.'}
          </MainBlockParagraph>
        </MainBlockWraper>
        <MainBlockWraper>
        <MainBlockParagraph>
          {'Многолетний опыт работы нашего коллектива позволяет нам без'
            + ' труда выявить и устранить любую проблему с вашим автомобилем.'
            + ' Для этого у нас есть все необходимое новейшее оборудование и '
            + 'инструмент. Все используемое в ремонте оборудование, а также '
            + 'устанавливаемые запасные части сертифицированы. На все виды'
            + ' работ, приобретенные у нас и установленные на ваш автомобиль запасные'
            + ' части предоставляется гарантия качества.'}
        </MainBlockParagraph>
        </MainBlockWraper>
      </Element>
      <Element name={'price'}>
        <MainBlockHeader>{'УСЛУГИ И ЦЕНЫ'}</MainBlockHeader>
        <PriceConnected />
      </Element>
      <Element name={'warranty'}>
        <MainBlockHeader>{'ГАРАНТИЯ'}</MainBlockHeader>
        <MainBlockUList>
          <MainBlockListItem>
            <strong style={{fontSize: '16px'}}>{'Техническое обслуживание: '}</strong>
            {'20 дней или 1000 км пробега'}
          </MainBlockListItem>
          <MainBlockListItem>
            <strong style={{fontSize: '16px'}}>{'Текущий ремонт: '}</strong>
            {'90 дней или 7000 км пробега'}
          </MainBlockListItem>
          <MainBlockListItem>
            <strong style={{fontSize: '16px'}}>{'Регулировочные работы: '}</strong>
            {'3 - 5 дней'}
          </MainBlockListItem>
          <MainBlockListItem>
            <strong style={{fontSize: '16px'}}>{'Ремонт кузова и его элементов: '}</strong>
            {'6 месяцев'}
          </MainBlockListItem>
          <MainBlockListItem>
            <strong style={{fontSize: '16px'}}>{'Полная или частичная окраска: '}</strong>
            {'6 месяцев'}
          </MainBlockListItem>
        </MainBlockUList>
      </Element>
      <FooterWrapper>
        <Footer>
          <FooterScheduleWrapper>
            <Element name={'schedule'}>
              <FooterSchedule>
                <FooterHeader>
                  {'ГРАФИК РАБОТЫ'}
                </FooterHeader>
                <FooterScheduleRow icon={'f041'}>
                  {'Санкт-Петербург, Богатырский пр., д. 16'}
                </FooterScheduleRow>
                <FooterScheduleRow icon={'f073'}>
                  {'Пн-Пт: 9:00 - 21:00 / Сб-Вс: 10:00 - 19:00'}
                </FooterScheduleRow>
              </FooterSchedule>
            </Element>
          </FooterScheduleWrapper>
          <FooterMapWrapper>
            <Element name={'map'}>
              <FooterMap>
                <FooterHeader>
                  {'СХЕМА ПРОЕЗДА'}
                </FooterHeader>
                <iframe
                  src={'https://yandex.ru/map-widget/v1/?um=constructor%3A16d16df9c'
                  + 'f81a35778785cfecef37bf2d35d6c74afe533d7954ce052df7b2492&amp;so'
                  + 'urce=constructor'}
                  height={'410'}
                  style={{
                    display: 'block',
                    width: '100%',
                    margin: '10px 0',
                  }}
                ></iframe>
              </FooterMap>
            </Element>
          </FooterMapWrapper>
        </Footer>
        <FooterToTop onClick={handlerToTop} />
      </FooterWrapper>
    </MainWrapper>
  );
};
