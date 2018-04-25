import { combineReducers } from 'redux';

import {
  reducer as carousel,
  State as CarouselState,
} from '@src/redux/carousel';

import {
  reducer as price,
  State as PriceState,
} from '@src/redux/price';

export interface IRootState {
  carousel: CarouselState,
  price: PriceState,
}

export const rootReducer = combineReducers<IRootState>({
  carousel,
  price,
});
