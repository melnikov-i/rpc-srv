import {
  IPriceContentItem,
} from '@src/interfaces';

export const Engine: IPriceContentItem[] = [
  {
    header: 'Двигатель ЕР6 (цепь 120л.)',
    rows: [
      ['Замена ремня генератора', '500 р.'],
      ['Замена ролика натяжителя приводного ремня', '1000 р.'],
      ['Замена прижимного ролика', '600 р.'],
      ['Замена водяного насоса ( помпы )', '1800 р.'],
      ['Замена термостата ( корпуса термостата )', '2500 р.'],
      ['Замена прокладки клапанной крышки', '1500 р.'],
      ['Замена комплекта прокладок корпуса масляного фильтра мотор EP6 120 л.с.', '3000 р.'],
      ['Замена комплекта прокладок корпуса масляного фильтра мотор EP6 150 л.с.', '5000 р.'],
      ['Замена комплекта цепи ГРМ', '5000 р.'],
      ['Замена натяжителя цепи ГРМ EP6 120 л.с.', '1000 р.'],
      ['Замена переднего сальника коленвала со ступицей', '2000 р.'],
      ['Замена маслосъемных колпачков на двигателе EP6 120 л.с.', '13000 р.'],
      ['Стоимость жидкостной промывки инжектора (чистки форсунок)', '1800 р.'],
    ],
  },
  {
    header: 'Двигатель с ременным приводом ГРМ',
    rows: [
      ['Замена ремня привода ГРМ 8-клапонов', 'от 2200 р.'],
      ['Замена ремня привода ГРМ 16-клапонов', 'от 3600 р.'],
      ['Замена водяного насоса (доп. работа)', 'от 700 р.'],
      ['Замена прокладки клапанной крышки ДВС 8-кл.', 'от 800 р.'],
      ['Замена прокладки клапанной крышки ДВС 16-кл.', 'от 1500 р.'],
    ],
  },
];

export const GearBox: IPriceContentItem[] = [
  {
    header: 'Работы по механической КПП',
    rows: [
      ['Масло МКПП - замена', '600 р.'],
      ['Ремонт МКПП ( разборка / сборка )', '6000 р.'],
      ['Снятие / установка МКПП', '6000 р.'],
      ['Замена сцепления (МКПП)', '6000 р.'],
      ['Замена рабочего цилиндра сцепления', '1300 р.'],
      ['Замена подвесного подшипника', '1700 р.'],
      ['Замена подвесного подшипника', '400 р.'],
      ['Снятие / установка правого привода', '1500 р.'],
      ['Снятие / установка левого привода', '1200 р.'],
      ['Замена сальника привода', '200 р.'],
      ['Замена пыльника внешнего ШРУС', '2000 р.'],
      ['Замена внешнего ШРУС', '2000 р.'],
    ],
  },
  {
    header: 'Работы по автоматической КПП',
    rows: [
      ['Замена клапанов и промывка гидроблока АКПП AL4', '4400'],
    ],
  },
];

export const Diagnostic: IPriceContentItem[] = [
  {
    header: 'Диагностика',
    rows: [
      ['Компьютерная диагностика (считывание кодов)', '950 р.'],
      ['Диагностика двигателя', '950 р.'],
      ['Диагностика перед покупкой (осмотр + подключение сканера)', '1200 р.'],
      ['Диагностика подвески / диагностика ходовой части', '350 р.'],
      ['Диагностика системы кондиционирования', '800 р.'],
      ['Заправка системы кондиционирования	от', '1800 р.'],
      ['Поиск неисправности в электроцепи / ремонт электрики. Цена за 1 час работы. '
        + 'Индивидуальна в зависимости от сложнолсти.', '1000 р.'],
    ],
  },
];

export const BrakingSystem: IPriceContentItem[] = [
  {
    header: 'Передняя ось',
    rows: [
      ['Замена передних тормозных колодок', '700 р.'],
      ['Замена передних тормозных дисков', '1400 р.'],
      ['Чистка / смазка тормозных механизмов', '200 р.'],
    ],
  },
  {
    header: 'Задняя ось',
    rows: [
      ['Замена задних барабанных колодок', '1600 р.'],
      ['Чистка / смазка тормозных механизмов', '200 р.'],
    ],
  },
];

export const Transmission: IPriceContentItem[] = [
  {
    header: 'Работы по роботизированной КПП',
    rows: [
      ['Диагностика сцепления (робот)', '950 р.'],
      ['Комплект сцепления (робот) - замена', '6500 р.'],
      ['"Обучение" / адаптация сцепления "Обучение" / адаптация сцепления и актуатора сцепления (робот)', '1000 р.'],
      ['Актуатор сцепления (робот) - замена', '1200 р.'],
    ],
  },
];

export const Steering: IPriceContentItem[] = [
  {
    header: 'Рулевое управление',
    rows: [
      ['Замена рулевого наконечника', '550 р.'],
      ['Замена рулевой тяги', '850 р.'],
    ],
  },
];

export const Chassis: IPriceContentItem[] = [
  {
    header: 'Передняя ось',
    rows: [
      ['Замена переднего амортизатора	от', '1400 р.'],
      ['Замена опорного подшипника переднего амортизатора', '1400 р.'],
      ['Замена передней пружины', '1400 р.'],
      ['Замена переднего нижнего рычага', '2000 р.'],
      ['Замена переднего верхнего рычага Пежо 407-C5 с 2008 г.в.', '1600 р.'],
      ['Замена сайлентблока переднего рычага Пежо 407-C5с 2008 г.в.', '2300 р.'],
      ['Замена комплекта сайлентблоков переднего рычага  407-C5 с 2008 г.в.', '2500 р.'],
      ['Замена комплекта сайлентблоков переднего рычага	от', '1700 р.'],
      ['Замена шаровой опоры нижней Пежо 407 - С5 с 2008 г.в.', '1600 р.'],
      ['Замена шаровой опоры нижней	от', '600 р.'],
      ['Замена шаровой опоры нижней Пежо 407 - С5 с 2008 г.в.', '1200 р.'],
      ['Замена шаровой опоры верхней Пежо 407 -С5 с 2008 г.в.', '1600 р.'],
      ['Замена переднего ступичного подшипника Пежо 407 - С5 с 2008 г.в.', '1800 р.'],
      ['Замена стойки переднего стабилизатора	от', '550 р.'],
      ['Замена втулок переднего стабилизатора	от', '800 р.'],
    ],
  },
  {
    header: 'Задняя ось',
    rows: [
      ['Замена стойки заднего стабилизатора Пежо 407 - С5 с 2008 г.в.', '700 р.'],
      ['Замена втулок заднего стабилизатора Пежо 407 - С5 с 2008 г.в.', '800 р.'],
      ['Замена задней ступицы ( с подшипником ) Пежо 407 - С5', '1200 р.'],
      ['Замена заднего поперечного нижнего рычага Пежо 407 - С5 с 2008 г.в.', '800 р.'],
      ['Замена заднего верхнего рычага ( треугольного ) Пежо 407 - С5 с 2008 г.в.', '1600 р.'],
      ['Замена заднего продольного рычага Пежо 407 - С5 с 2008 г.в.', '800 р.'],
      ['Замена сайлентблоков продольного рычага Пежо 407 - С5 с 2008 г.в.', '1500 р.'],
      ['Замена сайлентблоков заднего поперечного рычага Пежо 407 - С5 с 2008 г.в.', '1000 р.'],
      ['Замена тяги регулировки схождения Пежо 407 - С5 с 2008 г.в.', '800 р.'],
      ['Замена заднего поворотного кулака Пежо 407- - С5 с 2008 г.в.', '2000 р.'],
      ['Замена сайлентблоков задней балки	от', '5000 р.'],
      ['Замена заднего амортизатора	от', '750 р.'],
    ],
  },
];

export const TireFitting: IPriceContentItem[] = [
  {
    header: 'Шиномонтаж',
    rows: [
      ['R13 / R14', '1000 р.'],
      ['R15 / R16', '1200 р.'],
      ['R17', '1400 р.'],
      ['R18', '1500 р.'],
    ],
  },
];
