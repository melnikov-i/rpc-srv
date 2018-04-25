import * as React from 'react';

import {
  PriceWrapper,
  PriceMenu,
  PriceMenuItem,
  PriceMenuAnchor,
} from '@src/styled';

interface IPriceProps {

}

export const Price: React.SFC<IPriceProps> = ( props ) => {
  const Menu: string[] = [
    'ДВИГАТЕЛЬ',
    'ТРАНСМИССИЯ',
    'УПРАВЛЕНИЕ',
    'ХОДОВАЯ ЧАСТЬ',
    'ШИНОМОНТАЖ',
  ];
  return (
    <PriceWrapper>
      <PriceMenu>
        {Menu.map((e, i, a) => (
          <PriceMenuItem
            width={String(100 / a.length)}
            key={i}
          >
            <PriceMenuAnchor>{e}</PriceMenuAnchor>
          </PriceMenuItem>
        ))}
      </PriceMenu>
    </PriceWrapper>
  );
};
