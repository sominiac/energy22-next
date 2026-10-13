import clsx from "clsx";
import Image from "next/image";

import ArrowUpIcon from "@images/arrow-up.png";

import styles from "./styles/upButton.module.scss";

type TUpButtonProps = {
  className?: string;
};

const UpButton = ({ className }: TUpButtonProps) => {
  const onScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className={clsx(styles.upButton, className)}
      onClick={onScrollToTop}
    >
      <Image src={ArrowUpIcon} alt="arrow up" />
    </button>
  );
};

export default UpButton;
