/**
 * All interface or types app
 */

import { ReactNode } from "react";

export interface IButtonProps {
  text?: string | number | ReactNode;
  children?: ReactNode;
}

export interface ILayoutProps {
  children?: ReactNode;
}

export interface ITextProps {
  text?: string | number | ReactNode;
  children?: ReactNode;
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
}

export interface ILogoProps {
  width?: number;
  height?: number;
}
