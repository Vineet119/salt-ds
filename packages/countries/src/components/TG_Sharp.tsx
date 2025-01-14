// WARNING: This file was generated by a script. Do not modify it manually
import { forwardRef } from "react";
import { useId } from "@salt-ds/core";
import { clsx } from "clsx";

import { CountrySymbol, CountrySymbolProps } from "../country-symbol";

export type TG_SharpProps = CountrySymbolProps;

const TG_Sharp = forwardRef<SVGSVGElement, TG_SharpProps>(function TG_Sharp(
  props: TG_SharpProps,
  ref
) {
  const uid = useId(props.id);

  const { className, ...rest } = props;

  return (
    <CountrySymbol
      data-testid="TG_Sharp"
      aria-label="Togo"
      viewBox="0 0 72 50"
      ref={ref}
      className={clsx(className, { "saltCountrySymbol-sharp": true })}
      {...rest}
    >
      <mask
        id={`${uid}-TG-a`}
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
      >
        <path fill="#D9D9D9" d="M0 0h72v50H0z" />
      </mask>
      <g mask={`url(#${uid}-TG-a)`}>
        <path fill="#009B77" d="M0 50V0h72v50z" />
        <path fill="#F1B434" d="M0 21V10h72v11zm0 21V32h72v10z" />
        <path fill="#DD2033" d="M0 32V0h36v32z" />
        <path
          fill="#F5F7F8"
          d="m18 6-2.98 6.742L8 13.64l5.177 5.064L11.82 26 18 21.833 24.18 26l-1.357-7.297L28 13.64l-7.02-.897L18 6Z"
        />
      </g>
    </CountrySymbol>
  );
});

export default TG_Sharp;
