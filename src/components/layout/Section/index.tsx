import clsx from "clsx";
import Text from "@components/ui/Text";
import type { FC, PropsWithChildren } from "react";
import styles from "./styles/section.module.scss";

type TSectionProps = {
  id?: string;
  title?: string;
  hasBorder?: boolean;
  hasBlur?: boolean;
  classNameSection?: string;
  classNameInner?: string;
};

const Section: FC<PropsWithChildren<TSectionProps>> = ({
  id,
  title,
  hasBorder = true,
  hasBlur = true,
  classNameSection,
  classNameInner,
  children,
}) => {
  return (
    <section className={clsx(styles.section, classNameSection)} id={id}>
      {title && (
        <Text
          className={styles.section__title}
          component="p"
          componentType="h3"
        >
          {title}
        </Text>
      )}

      <div
        className={clsx(
          styles.section__inner,
          hasBorder && styles.section__innerWithBorder,
          hasBlur && styles.section__innerWithBlur,
          classNameInner,
        )}
      >
        {children}
      </div>
    </section>
  );
};

export default Section;
