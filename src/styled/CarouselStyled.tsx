import styled from 'styled-components';

/**
 * Внешняя обертка для карусели. В связке с внутренней
 * позволяет задавать относительную высоту блока
 * @returns {React.Component}
 */
export const CarouselWrapper = styled.div`
  position: relative;
  display: block;
  margin: 100px 0 30px;
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
interface ICarouselInnerWrapperProps {
  width: string,
}

export const CarouselInnerWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: ${(props: ICarouselInnerWrapperProps) => props.width + '00%'};
  transform: translateX(-20%);
  `;

/**
 * Стрелка назад
 */
export const CarouselInnerWrapperBackwardAnchor = styled.div`
  &::before {
    content: "\\f104";
    font-family: FontAwesome;
    font-size: 56px;
    padding-left: 14px;
    box-sizing: border-box;
    font-weight: normal;
    color: #fff;
    display: block;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 60px;
    height: 60px;
    background: rgba(0, 0, 0, .5);
    z-index: 10;
    cursor: pointer;
  }
`;

/**
 * Стрелка вперед
 */
export const CarouselInnerWrapperForwardAnchor = styled.div`
  &::before {
    content: "\\f105";
    font-family: FontAwesome;
    font-size: 56px;
    padding-left: 25px;
    box-sizing: border-box;
    font-weight: normal;
    color: #fff;
    display: block;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 60px;
    height: 60px;
    background: rgba(0, 0, 0, .5);
    z-index: 10;
    cursor: pointer;
  }
`;

/**
 * Внешний блок слайда карусели.
 */
interface ICarouselItemProps {
  width: number,
  image: any,
}

export const CarouselItem = styled.div`
  display: inline-block;
  vertical-align: top;
  width: ${(props: ICarouselItemProps) => String(100 / props.width) + '%'};
  height: 100%;
  background-image: url(${(props: ICarouselItemProps) => (props.image)});
  background-size: cover;
  background-position: center center;
`;
