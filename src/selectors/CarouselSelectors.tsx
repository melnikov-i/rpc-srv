import { createSelector } from 'reselect';

import { IRootState } from '@src/redux';

export const CarouselCollectionSelector = createSelector(
  ( state: IRootState ) => state.carousel.CarouselCollection,
  ( CarouselCollection ) => CarouselCollection,
);
