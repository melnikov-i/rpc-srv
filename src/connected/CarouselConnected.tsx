import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Dispatch, RootState } from '@src/redux';

import { Carousel } from '@src/components';

import {
  asyncActionCreators
} from '@src/redux/carousel';

import {
  CarouselInterface
} from '@src/interfaces';

import {
  CarouselCollectionSelector
} from '@src/selectors';

const mapStateToProps = createStructuredSelector<RootState, {
    CarouselCollection: CarouselInterface
  }>({
    CarouselCollection: CarouselCollectionSelector,
  });

const mapDispatchToProps = ( dispatch: Dispatch ) => bindActionCreators({
  makeCarouselAnimationContinue: 
    asyncActionCreators.makeCarouselAnimationContinue,
}, dispatch);

export const CarouselConnected = connect(
    mapStateToProps, mapDispatchToProps
  )(Carousel);