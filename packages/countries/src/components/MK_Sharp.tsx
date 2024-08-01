// WARNING: This file was generated by a script. Do not modify it manually

import { useId } from "@salt-ds/core";
import { forwardRef } from "react";

import { CountrySymbol, type CountrySymbolProps } from "../country-symbol";

export type MK_SharpProps = CountrySymbolProps;

const MK_Sharp = forwardRef<SVGSVGElement, MK_SharpProps>(function MK_Sharp(
  props: MK_SharpProps,
  ref,
) {
  const uid = useId(props.id);

  return (
    <CountrySymbol
      data-testid="MK_Sharp"
      aria-label="North Macedonia"
      viewBox="0 0 72 50"
      ref={ref}
      sharp
      {...props}
    >
      <mask
        id={`${uid}-MK-a`}
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
      >
        <path fill="#D9D9D9" d="M0 0h72v50H0z" />
      </mask>
      <g mask={`url(#${uid}-MK-a)`}>
        <path fill="#DD2033" d="M0-11h72v72H0z" />
        <path
          fill="#FBD381"
          d="M24.908 17.001a14.078 14.078 0 0 1 3.493-3.492L13.299-8.001 0-.499l24.908 17.501Zm8.691-5.721a14.07 14.07 0 0 1 4.826-.135L43-15H29l4.599 26.28Zm14.317 5.757a14.08 14.08 0 0 0-3.27-3.351L60.162-8.412 72 .5 47.916 17.037Zm2.313 5.767a14.098 14.098 0 0 1-.086 4.877L76.25 32.25v-14l-26.021 4.554Zm-5.667 13.572a14.08 14.08 0 0 0 3.214-3.214L72 50l-11.678 8.822-15.76-22.446Zm-6.222 2.491a14.13 14.13 0 0 1-4.656-.13L29 65.5h14l-4.66-26.633Zm-9.853-2.317a14.08 14.08 0 0 1-3.437-3.352L0 50l13.139 8.41 15.348-21.86Zm-5.857-9.004L-4.25 32.25v-14l26.8 4.69a14.118 14.118 0 0 0 .08 4.606ZM47.4 25c0 6.075-4.925 11-11 11s-11-4.925-11-11 4.925-11 11-11 11 4.925 11 11Z"
        />
      </g>
    </CountrySymbol>
  );
});

export default MK_Sharp;
