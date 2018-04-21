export interface CarouselItemInterface {
  image: any,
  header: string,
  text: string,
}

export interface CarouselInterface {
  items: CarouselItemInterface[],
}