// WARNING: This file was generated by a script. Do not modify it manually
import { forwardRef } from "react";

import { Icon, IconProps } from "../icon";

export type MusicIconProps = IconProps;

export const MusicIcon = forwardRef<SVGSVGElement, MusicIconProps>(
  function MusicIcon(props: MusicIconProps, ref) {
    return (
      <Icon
        data-testid="MusicIcon"
        aria-label="music"
        viewBox="0 0 12 12"
        ref={ref}
        {...props}
      >
        <path
          fillRule="evenodd"
          d="M5 9.5V1.883l6-.75V6.5a2.5 2.5 0 1 0 1 2V0L4 1v6.5a2.5 2.5 0 1 0 1 2Zm-1 0a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Zm7-1a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z"
          clipRule="evenodd"
        />
      </Icon>
    );
  }
);