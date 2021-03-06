import { combineReducers } from 'redux';
import {
  ICarouselInterface,
} from '@src/interfaces';

import {
  CAROUSEL_ANIMATION_CONTINUE,
  CAROUSEL_TRANSFORM_CHANGE,
} from '@src/redux/carousel';

export type State = {
  readonly CarouselCollection: ICarouselInterface,
};

const slide1 = require('@src/images/slide_1.png');
const slide2 = require('@src/images/slide_2.png');
const slide3 = require('@src/images/slide_3.png');
const slide4 = require('@src/images/slide_4.png');

const CarouselInit: ICarouselInterface = {
  direction: true,
  items: [
    {
      image: slide1,
      header: '',
      text: '',
    }, {
      image: slide2,
      header: '',
      text: '',
    }, {
      image: slide3,
      header: '',
      text: '',
    }, {
      image: slide4,
      header: '',
      text: '',
    },
  ],
};

export const reducer = combineReducers<State>({
  CarouselCollection: ( state = CarouselInit, action ) => {
    switch ( action.type ) {
      case CAROUSEL_ANIMATION_CONTINUE:
        return action.payload;
      case CAROUSEL_TRANSFORM_CHANGE:
        return {
          ...state,
          ['transform']: action.payload,
        };
      default:
        return state;
    }
  },
});
