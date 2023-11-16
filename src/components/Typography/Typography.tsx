import classNames from "classnames";
import { TypographyProps } from "./@types";
import styles from "./styles.module.css";
import typographyVarients from "./variant";

function Typography(props: TypographyProps) {
  const { variant = "Text", className, children, ...rest } = props;
  const { Component } = typographyVarients[variant];
  return (
    <Component className={classNames(styles[variant], className)} {...rest}>
      {children}
    </Component>
  );
}

export default Typography;
