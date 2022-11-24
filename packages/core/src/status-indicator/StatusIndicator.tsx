import {
  DEFAULT_ICON_SIZE,
  ErrorSolidIcon,
  IconProps,
  InfoSolidIcon,
  SuccessTickIcon,
  WarningSolidIcon,
} from "@jpmorganchase/uitk-icons";
import classnames from "classnames";
import { forwardRef } from "react";
import { makePrefixer } from "../utils";
import { ValidationStatus } from "./ValidationStatus";

import "./StatusIndicator.css";

const icons = {
  error: ErrorSolidIcon,
  success: SuccessTickIcon,
  warning: WarningSolidIcon,
  info: InfoSolidIcon,
};

export interface StatusIndicatorProps extends IconProps {
  /**
   * Status indicator to be displayed.
   */
  status: ValidationStatus;
}

const statusToAriaLabelMap: Record<ValidationStatus, string> = {
  error: "error",
  success: "success",
  warning: "warning",
  info: "info",
};

const withBaseName = makePrefixer("uitkStatusIndicator");

export const StatusIndicator = forwardRef<SVGSVGElement, StatusIndicatorProps>(
  function StatusIndicator(
    { className, status, size = DEFAULT_ICON_SIZE, ...restProps },
    ref
  ) {
    const IconComponent = icons[status];
    const ariaLabel = statusToAriaLabelMap[status];

    return (
      <IconComponent
        className={classnames(withBaseName(), withBaseName(status), className)}
        size={size}
        aria-label={ariaLabel}
        {...restProps}
        ref={ref}
      />
    );
  }
);