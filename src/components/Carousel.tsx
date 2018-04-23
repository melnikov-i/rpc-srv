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
      ['items']: [
        ...CarouselCollection.items.slice(1),
        CarouselCollection.items[0],
      ]
    };

    const makeAnimation = () => {
      const element: HTMLElement | null = 
        document.getElementById('CarouselWrapper');
      console.log('makeAnimation');
      if ( element !== null ) {
        element.style.transform = 'translateX(-50%)';
      } else {
        setTimeout(() => {
          makeAnimation();
        }, 200);
      }
      
      return 'OK';
    };
    makeCarouselAnimationContinue(payload, true);

    // console.log('collection:', CarouselCollection);
    // console.log('payload:', payload);
    // console.log('items:', items);

    // (setTimeout(()=>{
    //   const element: HTMLElement | null = 
    //     document.getElementById('carouselWrapper');
    //   if ( element !== null ) element.style.transform = 'translateX(-50%)'
    // }, 3000));

    console.log('carousel');

    
  return (
    <CarouselInnerWrapper
      id={'CarouselWrapper'}
      width={String(CarouselInnerWrapperWidth)}
      delay={CarouselCollection.delay}
      aDirection={CarouselCollection.direction}
      data-make-animation={makeAnimation()}
    >
      {items.map((e: CarouselItemInterface, i: number) => (
        <CarouselItem
          key={i}
          image={e.image}
          width={CarouselInnerWrapperWidth}
        />
      ))}
    </CarouselInnerWrapper>

  );
}