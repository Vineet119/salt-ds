// WARNING: This file was generated by a script. Do not modify it manually
import { forwardRef } from "react";
import { useId } from "@salt-ds/core";
import { clsx } from "clsx";

import { CountrySymbol, CountrySymbolProps } from "../country-symbol";

export type JP_SharpProps = CountrySymbolProps;

const JP_Sharp = forwardRef<SVGSVGElement, JP_SharpProps>(function JP_Sharp(
  props: JP_SharpProps,
  ref
) {
  const uid = useId(props.id);

  return (
    <CountrySymbol
      data-testid="JP_Sharp"
      aria-label="Japan"
      viewBox="0 0 72 50"
      ref={ref}
      sharp
      {...props}
    >
      <mask
        id={`${uid}-JP-a`}
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
      >
        <path fill="#D9D9D9" d="M0 0h72v50H0z" />
      </mask>
      <g mask={`url(#${uid}-JP-a)`}>
        <path fill="#F5F7F8" d="M0 0h72v50H0z" />
        <circle cx="36" cy="25" r="16" fill="#DD2033" />
      </g>
    </CountrySymbol>
  );
});

export default JP_Sharp;