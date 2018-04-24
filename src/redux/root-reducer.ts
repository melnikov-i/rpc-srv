import { combineReducers } from 'redux';

import { reducer as carousel, State as CarouselState } from '@src/redux/carousel';

export interface IRootState {
    carousel: CarouselState,
}

export const rootReducer = combineReducers<IRootState>({
    carousel,
});
