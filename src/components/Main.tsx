import * as React from 'react';
import { injectGlobal } from 'styled-components';
import {
  Link,
  Element,
} from 'react-scroll';

import {
  MainLayout,
  HeaderLayout,
  HeaderLogo,
} from '@src/styled';

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
    font-family: 'Open Sans', sans-serif;
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
  return (
    <MainLayout>
      <HeaderLayout>
        <HeaderLogo>
          
        </HeaderLogo>
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
        </HeaderLayout>
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
    </MainLayout>
  );
};