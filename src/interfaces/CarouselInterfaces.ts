export interface CarouselItemInterface {
  image: any,
  header: string,
  text: string,
}

export interface CarouselInterface {
  delay: string,
  direction: boolean,
  transform: string,
  items: CarouselItemInterface[],
}