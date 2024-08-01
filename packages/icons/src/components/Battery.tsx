// WARNING: This file was generated by a script. Do not modify it manually

import { forwardRef } from "react";

import { Icon, type IconProps } from "../icon";

export type BatteryIconProps = IconProps;

export const BatteryIcon = forwardRef<SVGSVGElement, BatteryIconProps>(
  function BatteryIcon(props: BatteryIconProps, ref) {
    return (
      <Icon
        data-testid="BatteryIcon"
        aria-label="battery"
        viewBox="0 0 12 12"
        ref={ref}
        {...props}
      >
        <path
          fillRule="evenodd"
          d="M8 0H4v1H3v11h6V1H8V0ZM4 2v9h4V2H4Z"
          clipRule="evenodd"
        />
      </Icon>
    );
  },
);
