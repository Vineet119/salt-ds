// WARNING: This file was generated by a script. Do not modify it manually

import { forwardRef } from "react";

import { Icon, type IconProps } from "../icon";

export type BrowserSolidIconProps = IconProps;

export const BrowserSolidIcon = forwardRef<
  SVGSVGElement,
  BrowserSolidIconProps
>(function BrowserSolidIcon(props: BrowserSolidIconProps, ref) {
  return (
    <Icon
      data-testid="BrowserSolidIcon"
      aria-label="browser solid"
      viewBox="0 0 12 12"
      ref={ref}
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M12 0H0v3h12V0ZM2 1h1v1H2V1Zm3 0H4v1h1V1Zm1 0h1v1H6V1Z"
        clipRule="evenodd"
      />
      <path d="M12 4H0v8h12V4Z" />
    </Icon>
  );
});
