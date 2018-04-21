import { combineReducers } from 'redux';

import { reducer as carousel, State as CarouselState } from '@src/redux/carousel';

export interface RootState {
    carousel: CarouselState,
}

export const rootReducer = combineReducers<RootState>({
    carousel
});