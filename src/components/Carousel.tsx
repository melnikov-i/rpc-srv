/**
 * Компонент слайдера, расположенного под основным меню.
 * Принимает из store массив объектов, содержащих пути к изображениями и текст.
*/
import * as React from 'react';

import {
  CarouselInterface,
  CarouselItemInterface
} from '@src/interfaces';

interface CarouselProps {
  CarouselCollection: CarouselInterface
}

export const Carousel: React.SFC<CarouselProps> = ( props ) => {
  const { CarouselCollection } = props;
  // const { items } = CarouselCollection;
  console.log('CarouselCollection:', CarouselCollection);
  return (
    <div>
      {CarouselCollection.items.map((e: CarouselItemInterface, i: number) => (
        <div></div>
      ))}
    </div>

  );
}