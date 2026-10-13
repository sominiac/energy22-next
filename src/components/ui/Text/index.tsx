import clsx from "clsx";
import type { ComponentProps, ElementType } from "react";
import type { TTextElements, TTextProps } from "./types.ts";
import styles from "./styles/text.module.scss";
import stylesType from "./styles/textType.module.scss";

const Text = <T extends TTextElements = "span">({
  component,
  componentType = "h1",
  isUsedDefaultStyles = true,
  className,
  children,
  ...props
}: TTextProps<T> & ComponentProps<T>) => {
  const TextComponent = (component || "span") as ElementType;
  return (
    <TextComponent
      className={clsx(
        isUsedDefaultStyles && styles.text,
        styles[TextComponent as string],
        stylesType[componentType],
        className,
      )}
      {...props}
    >
      {children}
    </TextComponent>
  );
};

export default Text;
