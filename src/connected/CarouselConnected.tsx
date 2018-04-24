import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Dispatch, IRootState } from '@src/redux';

import { Carousel } from '@src/components';

import {
  asyncActionCreators,
} from '@src/redux/carousel';

import {
  ICarouselInterface,
} from '@src/interfaces';

import {
  CarouselCollectionSelector,
} from '@src/selectors';

const mapStateToProps = createStructuredSelector<IRootState, {
    CarouselCollection: ICarouselInterface,
  }>({
    CarouselCollection: CarouselCollectionSelector,
  });

const mapDispatchToProps = ( dispatch: Dispatch ) => bindActionCreators({
  makeCarouselAnimationContinue:
    asyncActionCreators.makeCarouselAnimationContinue,
}, dispatch);

export const CarouselConnected = connect(
    mapStateToProps, mapDispatchToProps,
  )(Carousel);
