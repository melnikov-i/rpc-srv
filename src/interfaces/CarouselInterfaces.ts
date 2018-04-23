export interface CarouselItemInterface {
  image: any,
  header: string,
  text: string,
}

export interface CarouselInterface {
  direction: boolean,
  items: CarouselItemInterface[],
}