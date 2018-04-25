export const CHANGE_INDEX_OF_ACTIVE_ITEM = 'CHANGE_INDEX_OF_ACTIVE_ITEM';

export type Actions = {
  CHANGE_INDEX_OF_ACTIVE_ITEM: {
    type: typeof CHANGE_INDEX_OF_ACTIVE_ITEM,
    payload: number,
  },
};

export const syncActionCreators = {
  changeIndexOfActiveItem: ( payload: number ):
  Actions[typeof CHANGE_INDEX_OF_ACTIVE_ITEM] => ({
    type: CHANGE_INDEX_OF_ACTIVE_ITEM, payload,
  }),
};
