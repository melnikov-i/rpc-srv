import { createSelector } from 'reselect';

import { IRootState } from '@src/redux';

export const IndexOfActiveItemSelector = createSelector(
  ( state: IRootState ) => state.price.IndexOfActiveItem,
  ( IndexOfActiveItem ) => IndexOfActiveItem,
);

export const PriceMenuCollectionSelector = createSelector(
  ( state: IRootState ) => state.price.PriceMenuCollection,
  ( PriceMenuCollection ) => PriceMenuCollection,
);

export const TableRowsSelector = createSelector(
  [
    ( state: IRootState ) => state.price.TableRows,
    ( state: IRootState ) => state.price.IndexOfActiveItem,
  ],
  ( TableRows, IndexOfActiveItem ) => TableRows[IndexOfActiveItem],
);
