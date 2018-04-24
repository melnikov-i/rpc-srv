export interface ICarouselItemInterface {
  image: any,
  header: string,
  text: string,
}

export interface ICarouselInterface {
  direction: boolean,
  items: ICarouselItemInterface[],
}
