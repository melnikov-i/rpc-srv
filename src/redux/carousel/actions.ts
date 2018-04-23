import {
  CarouselInterface
} from '@src/interfaces';
import { Dispatch } from '@src/redux';

export const CAROUSEL_ANIMATION_CONTINUE =
  'CAROUSEL_ANIMATION_CONTINUE';
export const CAROUSEL_TRANSFORM_CHANGE =
  'CAROUSEL_TRANSFORM_CHANGE';
export const CAROUSEL_ANIMATION_CHANGE_DIRECTION =
  'CAROUSEL_ANIMATION_CHANGE_DIRECTION';

export type Actions = {
  CAROUSEL_ANIMATION_CONTINUE: {
    type: typeof CAROUSEL_ANIMATION_CONTINUE,
    payload: CarouselInterface,
  },
  CAROUSEL_ANIMATION_CHANGE_DIRECTION: {
    type: typeof CAROUSEL_ANIMATION_CHANGE_DIRECTION,
    payload: CarouselInterface['direction'],
  }
};

export const syncActionCreators = {
  carouselAnimationContinue: ( payload: CarouselInterface ):
  Actions[typeof CAROUSEL_ANIMATION_CONTINUE] => ({
    type: CAROUSEL_ANIMATION_CONTINUE, payload,
  }),
  carouselAnimationChangeDirection: 
  ( payload: CarouselInterface['direction'] ):
  Actions[typeof CAROUSEL_ANIMATION_CHANGE_DIRECTION] => ({
    type: CAROUSEL_ANIMATION_CHANGE_DIRECTION, payload,
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
    element.style.transform = 'translateX(-25%)';
  }
};

export const asyncActionCreators = {
  /**
   * Отправляет в store измененное состояние слайдера.
   * В зависимости от ситуации, делает это либо сразу,
   * либо с задержкой.
  */
  makeCarouselAnimationContinue: 
  ( payload: CarouselInterface, delay: boolean ) => {
    return ( dispatch: Dispatch ) => {
      if ( delay ) {
        setTimeout(() => {
          resetTransform();
          /**
           * Обновление state для продолжения анимации слайдов.
          */
          dispatch(
            syncActionCreators.carouselAnimationContinue(payload)
          );
        }, 8000);
      } else {
        let maxId = setTimeout(()=>{});
        while ( maxId-- ) {
          clearTimeout(maxId);
        }
        
        resetTransform();
        /**
         * Обновление state для продолжения анимации слайдов.
        */
        dispatch(
          syncActionCreators.carouselAnimationContinue(payload)
        );
      }
    }
  },
  makeCarouselAnimationChangeDirection:
  ( payload: CarouselInterface['direction'] ) => {
    return ( dispatch: Dispatch ) => {
      resetTransform();
      dispatch(
        syncActionCreators.carouselAnimationChangeDirection(payload)
      );
    }
  }
};