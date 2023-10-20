import classNames from "classnames";
import React from "react";
import { NavLink } from "react-router-dom";
import { variants, sizes } from "./utils";

import styles from "./Navbar.module.scss";

type NavbarLink = { label: string; path: string };

export type NavbarProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  links?: NavbarLink[];
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  leftComponent?: React.ReactNode;
};

export const Navbar = React.forwardRef<HTMLButtonElement, NavbarProps>(
  (
    {
      className = "",
      variant = "primary",
      size = "md",
      links = [],
      leftComponent,
      ...props
    },
    ref
  ) => {
    return (
      <nav
        ref={ref}
        className={classNames(
          styles.navBar,
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        <div className={styles.leftSide}>{leftComponent}</div>
        <div className={styles.linkContainer}>
          {links.map((link) => (
            <NavLink
              className={({ isActive }) =>
                [
                  styles.navLink,
                  isActive ? styles.active: "",
                ].join(" ")
              }
              to={link?.path}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
        <div className={styles.rightSide}>Right</div>
      </nav>
    );
  }
);

Navbar.displayName = "Button";
