// WARNING: This file was generated by a script. Do not modify it manually

import { useId } from "@salt-ds/core";
import { forwardRef } from "react";

import { CountrySymbol, type CountrySymbolProps } from "../country-symbol";

export type JE_SharpProps = CountrySymbolProps;

const JE_Sharp = forwardRef<SVGSVGElement, JE_SharpProps>(function JE_Sharp(
  props: JE_SharpProps,
  ref,
) {
  const uid = useId(props.id);

  return (
    <CountrySymbol
      data-testid="JE_Sharp"
      aria-label="Jersey"
      viewBox="0 0 72 50"
      ref={ref}
      sharp
      {...props}
    >
      <mask
        id={`${uid}-JE-a`}
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
      >
        <path fill="#D9D9D9" d="M0 0h72v50H0z" />
      </mask>
      <g mask={`url(#${uid}-JE-a)`}>
        <path fill="#F5F7F8" d="M0 0h72v50H0z" />
        <path
          fill="#DD2033"
          d="M65.471 56 72 50.378 42.529 25 72-.378 65.472-6 36 19.378 6.529-6 0-.378 29.471 25 .002 50.378 6.528 56 36 30.622 65.471 56Z"
        />
        <path
          fill="#F1B434"
          d="M28 5h16v6.084c0 5.228-3.161 9.936-8 11.916-4.839-1.98-8-6.688-8-11.916V5Z"
        />
      </g>
    </CountrySymbol>
  );
});

export default JE_Sharp;
