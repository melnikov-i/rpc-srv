import * as React from 'react';

import {
  PriceWrapper,
  PriceMenu,
  PriceMenuItem,
  PriceMenuAnchor,
} from '@src/styled';

interface IPriceProps {
  IndexOfActiveItem: number,
  TableRows: string[], // потом доработать тип
  changeIndexOfActiveItem: ( payload: number ) => any,
}

export const Price: React.SFC<IPriceProps> = ( props ) => {
  const {
    IndexOfActiveItem,
    TableRows,
    changeIndexOfActiveItem,
  } = props;

  console.log('Index:', TableRows);

  const Menu: string[] = [
    'ДВИГАТЕЛЬ',
    'ТРАНСМИССИЯ',
    'УПРАВЛЕНИЕ',
    'ХОДОВАЯ ЧАСТЬ',
    'ШИНОМОНТАЖ',
  ];

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

  const ValidOutput: JSX.Element = (
    <PriceWrapper>
      <PriceMenu>
        {Menu.map((e, i, a) => (
          <PriceMenuItem
            width={String(100 / a.length)}
            key={i}
          >
            <PriceMenuAnchor
              isActive={i === IndexOfActiveItem}
              isLast={i === a.length - 1}
              data-id={i}
              onClick={handlerPriceMenuAnchor}
            >{e}</PriceMenuAnchor>
          </PriceMenuItem>
        ))}
      </PriceMenu>
      <div>
        <p style={{fontSize: '14px'}}>{TableRows[IndexOfActiveItem]}</p>
      </div>
    </PriceWrapper>
  );

  return ValidOutput;
};
