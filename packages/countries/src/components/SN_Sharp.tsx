// WARNING: This file was generated by a script. Do not modify it manually
import { forwardRef } from "react";
import { useId } from "@salt-ds/core";
import { clsx } from "clsx";

import { CountrySymbol, CountrySymbolProps } from "../country-symbol";

export type SN_SharpProps = CountrySymbolProps;

const SN_Sharp = forwardRef<SVGSVGElement, SN_SharpProps>(function SN_Sharp(
  props: SN_SharpProps,
  ref
) {
  const uid = useId(props.id);

  const { className, ...rest } = props;

  return (
    <CountrySymbol
      data-testid="SN_Sharp"
      aria-label="Senegal"
      viewBox="0 0 72 50"
      ref={ref}
      className={clsx(className, { "saltCountrySymbol-sharp": true })}
      {...rest}
    >
      <mask
        id={`${uid}-SN-a`}
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
      >
        <path fill="#D9D9D9" d="M0 0h72v50H0z" />
      </mask>
      <g mask={`url(#${uid}-SN-a)`}>
        <path fill="#005B33" d="M0 50h24V0H0z" />
        <path fill="#FBD381" d="M24 50h24V0H24z" />
        <path fill="#DD2033" d="M48 50h24V0H48z" />
        <path
          fill="#005B33"
          d="m36 15-2.98 6.742-7.02.897 5.177 5.064L29.82 35 36 30.833 42.18 35l-1.357-7.297L46 22.64l-7.02-.897L36 15Z"
        />
      </g>
    </CountrySymbol>
  );
});

export default SN_Sharp;
