import * as React from 'react';
import { injectGlobal } from 'styled-components';
import {
  Link,
  Element,
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

  CarouselWrapper,
  CarouselInnerWrapper
} from '@src/styled';

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

  html, body {
    width: 100%;
    height: 100%;
    overflow-x: hidden;
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


interface MainProps {

}


export const Main: React.SFC<MainProps> = ( props ) => {
  
  /**
   * Данные для верхнего меню
   */

  const TopMenuData: any[] = [
    {
      text: '+7 (812) 642 1245',
      icon: 'f095',
    },
    {
      text: ['График', 'работы'],
      icon: 'f017',
    },
    {
      text: ['Схема', 'проезда'],
      icon: 'f041',
    }
  ];

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
                      <HeaderTopMenuAnchor>
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
          <ul>
            <li>
              <Link
                to={'test1'}
                smooth={true}
                dutation={300}
              >
                {'Test1'}
              </Link>
            </li>
            <li>
              <Link
                to={'test2'}
                smooth={true}
                dutation={300}
              >
                {'Test2'}
              </Link>
            </li>
            <li>
              <Link
                to={'test3'}
                smooth={true}
                dutation={300}
              >
                {'Test3'}
              </Link>
            </li>
          </ul>
        </HeaderWrapper>

        {/* Карусель */}
        <CarouselWrapper>
          <CarouselInnerWrapper>
            
          </CarouselInnerWrapper>
        </CarouselWrapper>


        
      <Element name={'test1'}>
        <div
          style={{
            width: '1280px',
            height: '615px',
            backgroundColor: 'rgba(127, 127, 127, .2)'
          }}
        >
          <p>Hello</p>
        </div>
      </Element>
      <Element name={'test2'}>
        <div
          style={{
            width: '1280px',
            height: '615px',
            backgroundColor: 'rgba(127, 127, 127, .2)'
          }}
        >
          <p>Hello</p>
        </div>
      </Element>
      <Element name={'test3'}>
        <div
          style={{
            width: '1280px',
            height: '615px',
            backgroundColor: 'rgba(127, 127, 127, .2)'
          }}
        >
          <p>Hello</p>
        </div>
      </Element>
    </MainWrapper>
  );
};