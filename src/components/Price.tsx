import * as React from 'react';

import {
  IPriceContentItem,
} from '@src/interfaces';

import {
  PriceWrapper,
  PriceMenu,
  PriceMenuItem,
  PriceMenuAnchor,
  PriceMenuAnchorText,
  PriceHeader,
  PriceTable,
  PriceTableRow,
  PriceTableHeadCol,
  PriceTableBodyCol,
} from '@src/styled';

interface IPriceProps {
  IndexOfActiveItem: number,
  PriceMenuCollection: string[],
  TableRows: IPriceContentItem[],
  changeIndexOfActiveItem: ( payload: number ) => any,
}

export const Price: React.SFC<IPriceProps> = ( props ) => {
  const {
    IndexOfActiveItem,
    PriceMenuCollection,
    TableRows,
    changeIndexOfActiveItem,
  } = props;

  const handlerPriceMenuAnchor =
  (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    e.nativeEvent.stopImmediatePropagation();
    const id: string | null =
      e.currentTarget.getAttribute('data-id');
    if ( id !== null ) {
      changeIndexOfActiveItem(Number(id));
    }
  };

  return (
    <PriceWrapper>
      <PriceMenu>
        {PriceMenuCollection.map((e, i, a) => (
          <PriceMenuItem
            width={String(100 / a.length)}
            key={'priceMenuCollection' + i}
          >
            <PriceMenuAnchor
              isActive={i === IndexOfActiveItem}
              isLast={i === a.length - 1}
              data-id={i}
              onClick={handlerPriceMenuAnchor}
            >
              <PriceMenuAnchorText
                isActive={i === IndexOfActiveItem}
              >{e}</PriceMenuAnchorText>
            </PriceMenuAnchor>
          </PriceMenuItem>
        ))}
      </PriceMenu>
      {TableRows.map((e: IPriceContentItem, i: number) => (
        <div key={'tableRows' + i}>
          <PriceHeader>{e.header}</PriceHeader>
          <PriceTable>
            <thead>
              <PriceTableRow>
                <PriceTableHeadCol
                  isEven={true}
                >
                  {'Наименование работы'}
                </PriceTableHeadCol>
                <PriceTableHeadCol
                  isEven={false}
                >
                  {'Цена'}
                </PriceTableHeadCol>
              </PriceTableRow>
            </thead>
            <tbody>
              {e.rows.map((row: string[], j: number) => (
                <PriceTableRow key={'rows' + j}>
                  {row.map((col: string, k: number) => (
                    <PriceTableBodyCol
                      key={'cols' + k}
                      isEven={k % 2 === 0}
                    >
                      {col}
                    </PriceTableBodyCol>
                  ))}
                </PriceTableRow>
              ))}
            </tbody>
          </PriceTable>
        </div>
      ))}
    </PriceWrapper>
  );
};
