import classNames from "classnames";
import React, { ElementType } from "react";

import styles from "./PushZone.module.scss";

export type PushZoneProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  component?: ElementType;
  disabled?: boolean;
};

export const PushZone = React.forwardRef<HTMLButtonElement, PushZoneProps>(
  ({ className = "", disabled, component, ...props }, ref) => {
    return React.createElement(component || "a", {
      className: classNames(
        styles.pushZone,
        { [styles.disabled] : disabled },
        { [className]: className }
      ),
      ref: ref,
      ...props,
    }) as React.ReactElement;
  }
);
