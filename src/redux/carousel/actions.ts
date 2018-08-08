import {
  ICarouselInterface,
} from '@src/interfaces';
import { Dispatch } from '@src/redux';

export const CAROUSEL_ANIMATION_CONTINUE =
  'CAROUSEL_ANIMATION_CONTINUE';
export const CAROUSEL_TRANSFORM_CHANGE =
  'CAROUSEL_TRANSFORM_CHANGE';

export type Actions = {
  CAROUSEL_ANIMATION_CONTINUE: {
    type: typeof CAROUSEL_ANIMATION_CONTINUE,
    payload: ICarouselInterface,
  },
};

export const syncActionCreators = {
  carouselAnimationContinue: ( payload: ICarouselInterface ):
  Actions[typeof CAROUSEL_ANIMATION_CONTINUE] => ({
    type: CAROUSEL_ANIMATION_CONTINUE, payload,
  }),
};

/**
 * Сбрасываем значение transition для плавного продолжения анимации слайдов.
 * Сама анимация задана в компоненте Carousel
 */
const resetTransform = (): void => {
  const element: HTMLElement | null = document.getElementById('CarouselWrapper');
  if ( element !== null ) {
    element.style.transition = 'none';
    element.style.transform = 'translateX(-20%)';
  }
};

export const asyncActionCreators = {
  /**
   * Отправляет в store измененное состояние слайдера.
   * В зависимости от ситуации, делает это либо сразу,
   * либо с задержкой.
   */
  makeCarouselAnimationContinue:
  ( payload: ICarouselInterface, delay: boolean ) => {
    return ( dispatch: Dispatch ) => {
      if ( delay ) {
        setTimeout(() => {
          resetTransform();
          /**
           * Обновление state для продолжения анимации слайдов.
           */
          dispatch(
            syncActionCreators.carouselAnimationContinue(payload),
          );
        }, 8000);
      } else {
        /**
         * Отключение всех setTimeout()
         */
        let maxId = setTimeout(() => {});
        while ( maxId-- ) {
          clearTimeout(maxId);
        }
        resetTransform();
        /**
         * Обновление state для продолжения анимации слайдов.
         */
        dispatch(
          syncActionCreators.carouselAnimationContinue(payload),
        );
      }
    };
  },
};
