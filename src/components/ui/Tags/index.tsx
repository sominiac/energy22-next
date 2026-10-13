import Slider from "react-slick";

import Text from "@components/ui/Text";

import styles from "./styles/tags.module.scss";
import "slick-carousel/slick/slick.css";

type TTagsProps = {
  className?: string;
};

const TAGS_LIST = [
  "#ГарантияКачества/",
  "#15ЛетОпыта/",
  "#ЗнаюТонкостиЭлектропроводки/",
  "#НадёжноеЭлектричество/",
  "#ВниманиемКДеталям/",
  "#ГарантияКачества/",
  "#15ЛетОпыта/",
  "#ЗнаюТонкостиЭлектропроводки/",
];

const Tags = ({ className }: TTagsProps) => {
  return (
    <div className={className}>
      <Slider
        className={styles.tags}
        dots={false}
        arrows={false}
        touchMove={false}
        swipe={false}
        speed={3000}
        autoplaySpeed={2000}
        cssEase="linear"
        autoplay
        variableWidth
        infinite
      >
        {TAGS_LIST.map((tag) => (
          <div className={styles.tags__item}>
            <Text componentType="text5">{tag}</Text>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Tags;
