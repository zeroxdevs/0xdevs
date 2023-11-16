type TypographyElement = HTMLHeadingElement | HTMLParagraphElement;

export interface TypographyElementsType {
  h1: HTMLHeadingElement;
  h2: HTMLHeadingElement;
  h3: HTMLHeadingElement;
  p: HTMLParagraphElement;
}

export type TypographyVariantsNameType = {
  Heading1: HTMLHeadingElement;
  Heading2: HTMLHeadingElement;
  Heading3: HTMLHeadingElement;
  TextSm: HTMLParagraphElement;
  Text: HTMLParagraphElement;
  TextLg: HTMLParagraphElement;
};

export interface TypographyVariantItems {
  Component: keyof TypographyElementsType;
}

export interface TypographyVariant
  extends Record<keyof TypographyVariantsNameType, TypographyVariantItems> {}

export interface TypographyProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<TypographyElement>,
    TypographyElement
  > {
  variant?: keyof TypographyVariantsNameType;
}
