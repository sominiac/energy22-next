import { StaticImageData } from "next/image";

export interface ISliderItem extends ISlide {
  itemClassName?: string;
}

export interface ISlide {
  id: number;
  text: string;
  image: StaticImageData;
  title: string;
  altText: string;
  isRightPlaced?: boolean;
}
