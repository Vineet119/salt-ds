// WARNING: This file was generated by a script. Do not modify it manually
import { forwardRef } from "react";
import { useId } from "@salt-ds/core";
import { clsx } from "clsx";

import { CountrySymbol, CountrySymbolProps } from "../country-symbol";

export type UA_SharpProps = CountrySymbolProps;

const UA_Sharp = forwardRef<SVGSVGElement, UA_SharpProps>(function UA_Sharp(
  props: UA_SharpProps,
  ref
) {
  const uid = useId(props.id);

  return (
    <CountrySymbol
      data-testid="UA_Sharp"
      aria-label="Ukraine"
      viewBox="0 0 72 50"
      ref={ref}
      sharp
      {...props}
    >
      <mask
        id={`${uid}-UA-a`}
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
      >
        <path fill="#D9D9D9" d="M0 0h72v50H0z" />
      </mask>
      <g mask={`url(#${uid}-UA-a)`}>
        <path fill="#005EB8" d="M72 0v25H0V0z" />
        <path fill="#F1B434" d="M72 25v25H0V25z" />
      </g>
    </CountrySymbol>
  );
});

export default UA_Sharp;