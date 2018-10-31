import { combineReducers } from 'redux';

import {
  IPriceContentItem,
} from '@src/interfaces';

import {
  CHANGE_INDEX_OF_ACTIVE_ITEM,
} from '@src/redux/price';

import {
  Engine,
  GearBox,
  Diagnostic,
  BrakingSystem,
  Steering,
  Transmission,
  Chassis,
  TireFitting,
} from '@src/initial';

export type State = {
  readonly IndexOfActiveItem: number,
  readonly PriceMenuCollection: string[],
  readonly TableRows: IPriceContentItem[][],
};

const PriceMenuCollectionInit: string[] = [
  'ДВИГАТЕЛЬ',
  'КПП',
  'ДИАГНОСТИКА',
  'ТОРМОЗНАЯ СИСТЕМА',
  'РУЛЕВОЕ УПРАВЛЕНИЕ',
  'ТРАНСМИССИЯ',
  'ХОДОВАЯ ЧАСТЬ',
  'ШИНОМОНТАЖ',
];

const TableRowsInit: IPriceContentItem[][] = [
  Engine,
  GearBox,
  Diagnostic,
  BrakingSystem,
  Steering,
  Transmission,
  Chassis,
  TireFitting,
];

export const reducer = combineReducers<State>({
  IndexOfActiveItem: ( state = 0, action ) => {
    switch ( action.type ) {
      case CHANGE_INDEX_OF_ACTIVE_ITEM:
        return action.payload;
      default:
        return state;
    }
  },
  PriceMenuCollection: ( state = PriceMenuCollectionInit, action ) => {
    switch ( action.type ) {
      default:
        return state;
    }
  },
  TableRows: ( state = TableRowsInit, action ) => {
    switch ( action.type ) {
      default:
        return state;
    }
  },
});
