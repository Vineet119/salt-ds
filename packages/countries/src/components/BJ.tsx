// WARNING: This file was generated by a script. Do not modify it manually

import { useId } from "@salt-ds/core";
import { forwardRef } from "react";

import { CountrySymbol, type CountrySymbolProps } from "../country-symbol";

export type BJProps = CountrySymbolProps;

const BJ = forwardRef<SVGSVGElement, BJProps>(function BJ(props: BJProps, ref) {
  const uid = useId(props.id);

  return (
    <CountrySymbol
      data-testid="BJ"
      aria-label="Benin"
      viewBox="0 0 72 72"
      ref={ref}
      {...props}
    >
      <mask
        id={`${uid}-BJ-a`}
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
      >
        <circle cx="36" cy="36" r="36" fill="#D9D9D9" />
      </mask>
      <g mask={`url(#${uid}-BJ-a)`}>
        <path fill="#DD2033" d="M-.4 72V36h72v36z" />
        <path fill="#FBD381" d="M-.4 36V0h72v36z" />
        <path fill="#009B77" d="M0 0h24v72H0z" />
      </g>
    </CountrySymbol>
  );
});

export default BJ;
