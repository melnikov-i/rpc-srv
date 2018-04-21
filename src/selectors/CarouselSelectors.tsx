import { createSelector } from 'reselect';

import { RootState } from '@src/redux';

export const CarouselCollectionSelector = createSelector(
  ( state: RootState ) => state.carousel.CarouselCollection,
  ( CarouselCollection ) => CarouselCollection,
);