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
  CarouselWrapper,
  CarouselInnerWrapperBackwardAnchor,
  CarouselInnerWrapperForwardAnchor,
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
        CarouselCollection.items[CarouselCollection.items.length - 1],
        CarouselCollection.items[0],
        CarouselCollection.items[1],
      ];

    console.log('items:', items);

    const payload: CarouselInterface = {
      ['direction']: CarouselCollection.direction,
      ['items']: CarouselCollection.direction ? [
        ...CarouselCollection.items.slice(1),
        CarouselCollection.items[0],
      ] : [
        CarouselCollection.items[CarouselCollection.items.length - 1],
        ...CarouselCollection.items.slice(
          0, CarouselCollection.items.length - 1),
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
        element.style.transform = 
          (CarouselCollection.direction) ? 'translateX(-50%)' : 'translateX(0)';
      }
    }, 1000);


  /**
   * Обработчики событий
  */
  const handlerBackwardAnchor = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.nativeEvent.stopImmediatePropagation();
    console.log('backward');
    makeCarouselAnimationContinue({
      ...payload,
      ['direction']: false,
    }, false);
  };
  
  const handlerForwardAnchor = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.nativeEvent.stopImmediatePropagation();
    console.log('forward');
    
    makeCarouselAnimationContinue({
      ...payload,
      ['direction']: true,
    }, false);
  };

  return (
    <CarouselWrapper>
      <CarouselInnerWrapperBackwardAnchor
        onClick={handlerBackwardAnchor}
      />
      <CarouselInnerWrapper
        id={'CarouselWrapper'}
        width={String(CarouselInnerWrapperWidth)}
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
      <CarouselInnerWrapperForwardAnchor
        onClick={handlerForwardAnchor}
      />
    </CarouselWrapper>
  );
}