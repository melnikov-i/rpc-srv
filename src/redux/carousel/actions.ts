import {
  CarouselInterface
} from '@src/interfaces';
import { Dispatch } from '@src/redux';

export const ANYTHINK = 'ANYTHINK';


export const CAROUSEL_ANIMATION_CONTINUE =
  'CAROUSEL_ANIMATION_CONTINUE';

export type Actions = {
  CAROUSEL_ANIMATION_CONTINUE: {
    type: typeof CAROUSEL_ANIMATION_CONTINUE,
    payload: CarouselInterface,
  }
};

export const syncActionCreators = {
  carouselAnimationContinue: ( payload: CarouselInterface ):
  Actions[typeof CAROUSEL_ANIMATION_CONTINUE] => ({
    type: CAROUSEL_ANIMATION_CONTINUE, payload,
  }),
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
        setTimeout(() => (
          dispatch(
            syncActionCreators.carouselAnimationContinue(payload)
          )
        ), 8000);
      } else {
        dispatch(
          syncActionCreators.carouselAnimationContinue(payload)
        );
      }
    }
  },
};