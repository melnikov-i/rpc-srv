import { combineReducers } from 'redux';

import {
  CHANGE_INDEX_OF_ACTIVE_ITEM,
} from '@src/redux/price';

export type State = {
  readonly IndexOfActiveItem: number,
  readonly TableRows: string[],
};

const TableRowsInit = [
  'Данные для вкладки ДВИГАТЕЛИ',
  'Данные для вкладки ТРАНСМИССИЯ',
  'Данные для вкладки УПРАВЛЕНИЕ',
  'Данные для вкладки ХОДОВАЯ ЧАСТЬ',
  'Данные для вкладки ШИНОМОНТАЖ',
];

export const reducer = combineReducers({
  IndexOfActiveItem: ( state = 0, action ) => {
    switch ( action.type ) {
      case CHANGE_INDEX_OF_ACTIVE_ITEM:
        return action.payload;
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
