import { createSelector } from 'reselect';

import { IRootState } from '@src/redux';

export const IndexOfActiveItemSelector = createSelector(
  ( state: IRootState ) => state.price.IndexOfActiveItem,
  ( IndexOfActiveItem ) => IndexOfActiveItem,
);

export const TableRowsSelector = createSelector(
  ( state: IRootState ) => state.price.TableRows,
  ( TableRows ) => TableRows,
);
