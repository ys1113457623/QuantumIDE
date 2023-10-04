import classNames from "classnames";
import React from "react";
import { Link } from "react-router-dom";
import { variants, sizes } from "./utils";

type NavbarLink = { label: string; path: string };

export type NavbarProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  links?: NavbarLink[];
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
};

export const Navbar = React.forwardRef<HTMLButtonElement, NavbarProps>(
  (
    { className = "", variant = "primary", size = "md", links = [], ...props },
    ref
  ) => {
    return (
      <nav
        ref={ref}
        className={classNames(
          "flex justify-center items-center border border-gray-300 disabled:opacity-70 disabled:cursor-not-allowed rounded-md shadow-sm font-medium focus:outline-none hover:opacity-80",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        <ul className="flex space-x-4">
          {links.map((link, index) => (
            <li key={index}>
              <Link to={link.path}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
);

Navbar.displayName = "Button";
