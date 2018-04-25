import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Dispatch, IRootState } from '@src/redux';

import { Price } from '@src/components';

import {} from '@src/interfaces';

import {} from '@src/selectors';

const mapStateToProps = createStructuredSelector<IRootState, {
  }>({
  });

const mapDispatchToProps = ( dispatch: Dispatch ) => bindActionCreators({
}, dispatch);

export const PriceConnected = connect(
    mapStateToProps, mapDispatchToProps,
  )(Price);
