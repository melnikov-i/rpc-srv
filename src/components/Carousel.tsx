/**
 * Компонент слайдера, расположенного под основным меню.
 * Принимает из store массив объектов, содержащих пути к изображениями и текст.
 */
import * as React from 'react';

import {
  ICarouselInterface,
  ICarouselItemInterface,
} from '@src/interfaces';

import {
  CarouselInnerWrapper,
  CarouselItem,
  CarouselWrapper,
  CarouselInnerWrapperBackwardAnchor,
  CarouselInnerWrapperForwardAnchor,
} from '@src/styled';

interface ICarouselProps {
  CarouselCollection: ICarouselInterface,
  makeCarouselAnimationContinue:
  ( payload: ICarouselInterface, delay: boolean ) => any,
}

export const Carousel: React.SFC<ICarouselProps> = ( props ) => {
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
  const items: ICarouselItemInterface[] = [
      CarouselCollection.items[CarouselCollection.items.length - 1],
      CarouselCollection.items[0],
      CarouselCollection.items[1],
    ];

  /**
   * Модель для обновления состояния в сторе. Отправляется
   * экшином в стор.
   * В зависимости от направления, коллекция итемов собирается
   * по-разному.
   */
  const payload: ICarouselInterface = {
    ['direction']: CarouselCollection.direction,
    ['items']: CarouselCollection.direction ? [
      ...CarouselCollection.items.slice(1),
      CarouselCollection.items[0],
    ] : [
      CarouselCollection.items[CarouselCollection.items.length - 1],
      ...CarouselCollection.items.slice(
        0, CarouselCollection.items.length - 1),
    ],
  };

  makeCarouselAnimationContinue(payload, true);

  /**
   * Приводит слайды в движение спустя 2 секунды
   */
  setTimeout(() => {
    const element: HTMLElement | null = document.getElementById('CarouselWrapper');
    if ( element !== null ) {
      element.style.transition = 'transform 2s ease 0s';
      element.style.transform =
        (CarouselCollection.direction) ? 'translateX(-50%)' : 'translateX(0)';
    }
  }, 1000);

  /* Обработчики событий */

  /**
   * Обрабатывает событие нажатия кнопки "Назад" на слайдере
   */
  const handlerBackwardAnchor = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.nativeEvent.stopImmediatePropagation();
    makeCarouselAnimationContinue({
      ...payload,
      ['direction']: false,
    }, false);
  };

  /**
   * Обрабатывает событие нажатия на кнопку "Вперед" на слайдере
   */
  const handlerForwardAnchor = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.nativeEvent.stopImmediatePropagation();
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
        I{items.map((e: ICarouselItemInterface, i: number) => (
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
};
