import { type ReactNode } from "react";

export type TTextElements =
  "span" | "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
export type TComponentType =
  "h1" | "h2" | "h3" | "h4" | "text1" | "text2" | "text3" | "text4" | "text5";
export type TTextProps<T extends TTextElements> = {
  component?: T;
  componentType?: TComponentType;
  isUsedDefaultStyles?: boolean;
  children: ReactNode;
};
