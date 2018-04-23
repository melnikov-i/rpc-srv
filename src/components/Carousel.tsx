/**
 * Компонент слайдера, расположенного под основным меню.
 * Принимает из store массив объектов, содержащих пути к изображениями и текст.
*/
import * as React from 'react';

import {
  CarouselInterface,
  CarouselItemInterface
} from '@src/interfaces';

import {
  CarouselInnerWrapper,
  CarouselItem,
  // CarouselInnerWrapperBackwardAnchor,
} from '@src/styled';

interface CarouselProps {
  CarouselCollection: CarouselInterface,
  makeCarouselAnimationContinue: 
  ( payload: CarouselInterface, delay: boolean ) => any,
}

export const Carousel: React.SFC<CarouselProps> = ( props ) => {
  const {
    CarouselCollection,
    makeCarouselAnimationContinue,
  } = props;
  
  /**
   * Часть величины ширины области, содержащей слайды
  */
  const CarouselInnerWrapperWidth: number = 
    CarouselCollection.items.length + 1;

    /**
     * Массив с моделями страниц слайдера, пригодный для
     * отображения на странице.
    */
    const items: CarouselItemInterface[] = [
      CarouselCollection.items[1],
      CarouselCollection.items[0],
      CarouselCollection.items[1],
      ...CarouselCollection.items.slice(2)
    ];

    const payload: CarouselInterface = {
      ...CarouselCollection,
      ['delay']: (CarouselCollection.delay === '6s') ? '5s' : '6s',
      ['direction']: true,
      ['transform']: 'translateX(-25%)',
      ['items']: [
        ...CarouselCollection.items.slice(1),
        CarouselCollection.items[0],
      ]
    };

    makeCarouselAnimationContinue(payload, true);

    /**
     * Приводит слайды в движение спустя 2 секунды
    */
    setTimeout(()=>{
      const element: HTMLElement | null = document.getElementById('CarouselWrapper');
      if ( element !== null ) {
        element.style.transition = 'transform 2s ease 0s';
        element.style.transform = (CarouselCollection.delay) ? 'translateX(-50%)' : 'translateX(0)';
      }
    }, 2000);


  return (
    <CarouselInnerWrapper
      id={'CarouselWrapper'}
      width={String(CarouselInnerWrapperWidth)}
      aDirection={CarouselCollection.direction}
    >
      {items.map((e: CarouselItemInterface, i: number) => (
        <CarouselItem
          key={i}
          image={e.image}
          width={CarouselInnerWrapperWidth}
        >

        </CarouselItem>
      ))}
    </CarouselInnerWrapper>

  );
}