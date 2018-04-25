import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Dispatch, IRootState } from '@src/redux';

import { Price } from '@src/components';

import { syncActionCreators } from '@src/redux/price';

import {} from '@src/interfaces';

import {
  IndexOfActiveItemSelector,
  TableRowsSelector,
} from '@src/selectors';

const mapStateToProps = createStructuredSelector<IRootState, {
    IndexOfActiveItem: number,
    TableRows: string[], // потом доработать тип
  }>({
    IndexOfActiveItem: IndexOfActiveItemSelector,
    TableRows: TableRowsSelector,
  });

const mapDispatchToProps = ( dispatch: Dispatch ) => bindActionCreators({
  changeIndexOfActiveItem: syncActionCreators.changeIndexOfActiveItem,
}, dispatch);

export const PriceConnected = connect(
    mapStateToProps, mapDispatchToProps,
  )(Price);
