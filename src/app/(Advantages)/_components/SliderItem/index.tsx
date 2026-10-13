import clsx from "clsx";
import Image from "next/image";

import Text from "@components/ui/Text";

import type { ISliderItem } from "@/interfaces/Slider/SliderItem.ts";

import styles from "./styles/sliderItem.module.scss";

const SliderItem = ({
  image,
  title,
  text,
  altText,
  isRightPlaced = false,
}: ISliderItem) => {
  return (
    <div
      className={clsx(
        styles.sliderItem,
        isRightPlaced && styles.sliderItem__reverse,
      )}
    >
      <Image className={styles.sliderItem__image} src={image} alt={altText} />
      <div>
        <Text
          className={styles.sliderItem__title}
          component="h4"
          componentType="h4"
        >
          {title}
        </Text>
        <Text componentType="text2">{text}</Text>
      </div>
    </div>
  );
};

export default SliderItem;
