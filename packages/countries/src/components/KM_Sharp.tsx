// WARNING: This file was generated by a script. Do not modify it manually
import { forwardRef } from "react";
import { useId } from "@salt-ds/core";
import { clsx } from "clsx";

import { CountrySymbol, CountrySymbolProps } from "../country-symbol";

export type KM_SharpProps = CountrySymbolProps;

const KM_Sharp = forwardRef<SVGSVGElement, KM_SharpProps>(function KM_Sharp(
  props: KM_SharpProps,
  ref
) {
  const uid = useId(props.id);

  const { className, ...rest } = props;

  return (
    <CountrySymbol
      data-testid="KM_Sharp"
      aria-label="Comoros (the)"
      viewBox="0 0 72 50"
      ref={ref}
      className={clsx(className, { "saltCountrySymbol-sharp": true })}
      {...rest}
    >
      <mask
        id={`${uid}-KM-a`}
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
      >
        <path fill="#D9D9D9" d="M0 0h72v50H0z" />
      </mask>
      <g mask={`url(#${uid}-KM-a)`}>
        <path fill="#004692" d="M0 50V37h72v13z" />
        <path fill="#DD2033" d="M0 37V25h72v12z" />
        <path fill="#F5F7F8" d="M0 25V13h72v12z" />
        <path fill="#FBD381" d="M0 13V0h72v13z" />
        <path fill="#009B77" d="M48 25 0-11v72l48-36Z" />
        <path
          fill="#F5F7F8"
          d="M10.4 25c0-6.631 4.61-12.185 10.8-13.633A14.042 14.042 0 0 0 18 11c-7.732 0-14 6.268-14 14s6.268 14 14 14a14.06 14.06 0 0 0 3.2-.367C15.01 37.185 10.4 31.63 10.4 25Zm15-5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm0 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm3 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
        />
      </g>
    </CountrySymbol>
  );
});

export default KM_Sharp;
