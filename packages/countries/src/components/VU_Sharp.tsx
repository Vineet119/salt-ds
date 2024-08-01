// WARNING: This file was generated by a script. Do not modify it manually

import { useId } from "@salt-ds/core";
import { forwardRef } from "react";

import { CountrySymbol, type CountrySymbolProps } from "../country-symbol";

export type VU_SharpProps = CountrySymbolProps;

const VU_Sharp = forwardRef<SVGSVGElement, VU_SharpProps>(function VU_Sharp(
  props: VU_SharpProps,
  ref,
) {
  const uid = useId(props.id);

  return (
    <CountrySymbol
      data-testid="VU_Sharp"
      aria-label="Vanuatu"
      viewBox="0 0 72 50"
      ref={ref}
      sharp
      {...props}
    >
      <mask
        id={`${uid}-VU-a`}
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
      >
        <path fill="#D9D9D9" d="M0 0h72v50H0z" />
      </mask>
      <g mask={`url(#${uid}-VU-a)`}>
        <path fill="#DD2033" d="M0-11v27h72v-27z" />
        <path fill="#008259" d="M0 34v27h72V34z" />
        <path fill="#31373D" d="M72 16H48.8l-36-27H5.4v72h7.4l36-27H72V16Z" />
        <path fill="#F1B434" d="M72 28H45.8l-44 33v-72l44 33H72v6Z" />
        <path fill="#31373D" d="M18.6 25a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" />
        <path
          fill="#31373D"
          fillRule="evenodd"
          d="m-7.4-11 48 36-48 36v-72Zm32 36c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10 10 4.477 10 10Z"
          clipRule="evenodd"
        />
      </g>
    </CountrySymbol>
  );
});

export default VU_Sharp;
