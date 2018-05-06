import styled from 'styled-components';

import {
  HEADER_BACKGROUND_COLOR,
} from '@src/styled';

/**
 * Обертка подвала страницы.
 */

export const FooterWrapper = styled.div`
  width: 100%;
  height: 585px;
  margin: 50px 0;
  background-color: #f5f5f5;
  box-sizing: border-box;
  padding: 50px;
  position: relative;
`;

/**
 * Подвал страницы
 */

export const Footer = styled.div`
  position: relative;
`;

/**
 * Обертка для контейнера с расписанием работы СТО
 */

export const FooterScheduleWrapper = styled.div`
  display: inline-block;
  vertical-align: top;
  width: 33.33%;
  position: absolute;
  top: 0;
  right: 0;
`;

/**
 * Контейнер с расписанием работы СТО
 */

export const FooterSchedule = styled.div`
  width: 100%;
  padding: 0 2.25%;
  box-sizing: border-box;
`;

/**
 * Обертка для контейнера с картой из Яндекса
 */

export const FooterMapWrapper = styled.div`
  display: inline-block;
  vertical-align: top;
  width: 66.66%;
  position: absolute;
  top: 0;
  left: 0;
`;

/**
 * Контейнер с картой из Яндекса
 */

export const FooterMap = styled.div`
  width: 100%;
  padding: 0 2.25%;
  box-sizing: border-box;
`;

/**
 * Заголовок футера
 */

export const FooterHeader = styled.div`
  margin-bottom: 10px;
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
  height: 34px;
  color: #3c3947;
  font-size: 18px;
  font-weight: 400;
`;

/**
 * Контейнер стрелки вверх для прокрутки страницы вверх
 */

export const FooterToTop = styled.div`
  width: 60px;
  height: 60px;
  position: fixed;
  bottom: 10px;
  right: 10px;
  background-color: ${ HEADER_BACKGROUND_COLOR };
  &::before {
    content: "\\f106";
    display: block;
    width: 60px;
    height: 60px;
    line-height: 55px;
    font-family: 'FontAwesome';
    font-size: 60px;
    color: #fff;
    text-align: center;
    cursor: pointer;
  }
`;
