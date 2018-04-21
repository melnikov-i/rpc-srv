import styled from 'styled-components';


/**
 * Внешняя обертка для карусели. В связке с внутренней
 * позволяет задавать относительную высоту блока
 * 
 * @returns {React.Component}
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