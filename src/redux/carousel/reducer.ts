import { combineReducers } from 'redux';
import {
  CarouselInterface
} from '@src/interfaces';

export type State = {
  readonly CarouselCollection: CarouselInterface,
};

const slide1 = require('@src/images/slide_1.png');
const slide2 = require('@src/images/slide_1.png');
const slide3 = require('@src/images/slide_1.png');

const CarouselInit: CarouselInterface = {
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
      default:
        return state;
    }
  }
});