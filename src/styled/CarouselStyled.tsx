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
  overflow: hidden;
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

interface CarouselInnerWrapperProps {
  width: string,
  delay: string,
  aDirection: boolean,
  // translate: string,
}

// const MoveToForward = keyframes`
//   0% {
//     transform: translateX(-25%);
//   }
//   100% {
//     transform: translateX(-50%);
//   }
// `;

// const MoveToBackward = keyframes`
//   0% {
//     transform: translateX(-25%);
//   }
//   100% {
//     transform: translateX(0);
//   }
// `;

export const CarouselInnerWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: ${(props: CarouselInnerWrapperProps) => props.width + '00%'};
  transform: translateX(-25%);
  transition: 'transform 1s ease 0s';
  `;
// animation-name: ${(props: CarouselInnerWrapperProps) => (
//   props.aDirection ? MoveToForward : MoveToBackward
// )};
// animation-duration: 1s;
// animation-timing-function: linear;
// animation-fill-mode: both;
// animation-delay: ${(props: CarouselInnerWrapperProps) => (
//   props.delay
// )};

// transition: transform 1s ease ${(props: CarouselInnerWrapperProps) => (
//   props.delay
// )};
        
/**
 * Внешний блок слайда карусели.
 */

interface CarouselItemProps {
  width: number,
  image: any,
}

export const CarouselItem = styled.div`
  display: inline-block;
  vertical-align: top;
  width: ${(props: CarouselItemProps) => String(100 / props.width) + '%'};
  height: 100%;
  background-image: url(${(props: CarouselItemProps) => (props.image)});
  background-size: cover;
  background-position: center center;
`;
        // width: 100%;
  // height: 100%;