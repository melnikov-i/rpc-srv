import { combineReducers } from 'redux';
import {
  CarouselInterface
} from '@src/interfaces';

import {
  CAROUSEL_ANIMATION_CONTINUE,
  CAROUSEL_TRANSFORM_CHANGE,
  CAROUSEL_ANIMATION_CHANGE_DIRECTION,
} from '@src/redux/carousel';

export type State = {
  readonly CarouselCollection: CarouselInterface,
};

const slide1 = require('@src/images/slide_1.png');
const slide2 = require('@src/images/slide_2.png');
const slide3 = require('@src/images/slide_3.png');

const CarouselInit: CarouselInterface = {
  direction: true,
  items: [
    {
      image: slide1,
      header: '',
      text: '',
    },
    {
      image: slide2,
      header: '',
      text: '',
    },
    {
      image: slide3,
      header: '',
      text: '',
    },
  ],
}

export const reducer = combineReducers({
  CarouselCollection: ( state = CarouselInit, action ) => {
    switch ( action.type ) {
      case CAROUSEL_ANIMATION_CONTINUE:
        return action.payload;
      case CAROUSEL_TRANSFORM_CHANGE:
        return {
          ...state,
          ['transform']: action.payload,
        };
      case CAROUSEL_ANIMATION_CHANGE_DIRECTION:
        return {
          ...state,
          ['direction']: action.payload,
        }
      default:
        return state;
    }
  }
});