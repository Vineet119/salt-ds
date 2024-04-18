// WARNING: This file was generated by a script. Do not modify it manually
import { forwardRef } from "react";
import { useId } from "@salt-ds/core";
import { clsx } from "clsx";

import { CountrySymbol, CountrySymbolProps } from "../country-symbol";

export type LC_SharpProps = CountrySymbolProps;

const LC_Sharp = forwardRef<SVGSVGElement, LC_SharpProps>(function LC_Sharp(
  props: LC_SharpProps,
  ref
) {
  const uid = useId(props.id);

  const { className, ...rest } = props;

  return (
    <CountrySymbol
      data-testid="LC_Sharp"
      aria-label="Saint Lucia"
      viewBox="0 0 72 50"
      ref={ref}
      className={clsx(className, { "saltCountrySymbol-sharp": true })}
      {...rest}
    >
      <mask
        id={`${uid}-LC-a`}
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
      >
        <path fill="#D9D9D9" d="M0 0h72v50H0z" />
      </mask>
      <g mask={`url(#${uid}-LC-a)`}>
        <path fill="#0091DA" d="M72 50H0V0h72z" />
        <path
          fill="#F5F7F8"
          d="M35.93 11.158 21.36 44h-2.29L35.93 6l16.86 38h-2.288L35.931 11.158Z"
        />
        <path
          fill="#31373D"
          d="M35.93 11.158 50.503 44H21.359l14.572-32.842Z"
        />
        <path fill="#F1B434" d="M36 26.865 53 44H19l17-17.135Z" />
      </g>
    </CountrySymbol>
  );
});

export default LC_Sharp;
