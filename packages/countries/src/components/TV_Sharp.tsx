// WARNING: This file was generated by a script. Do not modify it manually
import { forwardRef } from "react";
import { useId } from "@salt-ds/core";
import { clsx } from "clsx";

import { CountrySymbol, CountrySymbolProps } from "../country-symbol";

export type TV_SharpProps = CountrySymbolProps;

const TV_Sharp = forwardRef<SVGSVGElement, TV_SharpProps>(function TV_Sharp(
  props: TV_SharpProps,
  ref
) {
  const uid = useId(props.id);

  return (
    <CountrySymbol
      data-testid="TV_Sharp"
      aria-label="Tuvalu"
      viewBox="0 0 72 50"
      ref={ref}
      sharp
      {...props}
    >
      <mask
        id={`${uid}-TV-a`}
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
      >
        <path fill="#D9D9D9" d="M0 0h72v50H0z" />
      </mask>
      <g mask={`url(#${uid}-TV-a)`}>
        <path fill="#0091DA" d="M0 0h72v50H0z" />
        <path
          fill="#FBD381"
          d="m58.8 7-1.49 3.371-3.51.449 2.589 2.532-.68 3.648 3.091-2.083L61.89 17l-.679-3.648L63.8 10.82l-3.51-.449L58.8 7ZM46.3 19.67l.395 3.664-2.815 2.144 3.508.898 1.236 3.5 1.634-3.35 3.718.259-2.412-2.82.976-3.487-3.264 1.366L46.3 19.67ZM63.8 24l-1.49 3.371-3.51.449 2.589 2.532-.68 3.648 3.091-2.083L66.89 34l-.679-3.648L68.8 27.82l-3.51-.449L63.8 24Zm-12.294 8.17-.567 3.642-3.274 1.342 3.156 1.776.288 3.7 2.446-2.813 3.524 1.213-1.6-3.348 1.845-3.116-3.506.475-2.312-2.87ZM38.8 37l-1.49 3.371-3.51.449 2.589 2.532-.68 3.648 3.091-2.083L41.89 47l-.679-3.648L43.8 40.82l-3.51-.449L38.8 37Z"
        />
        <mask
          id={`${uid}-TV-b`}
          x="0"
          y="0"
          maskUnits="userSpaceOnUse"
          style={{ maskType: "alpha" }}
        >
          <path fill="#002F6C" d="M0 30V0h36v30H0Z" />
        </mask>
        <g mask={`url(#${uid}-TV-b)`}>
          <path fill="#004692" d="M0 0h36v36H0z" />
          <path
            fill="#F5F7F8"
            d="m12.79 1.005-2.12 2.121 26.197 26.197 2.12-2.121L12.792 1.005ZM7.134 6.662l-3.536 3.535 26.197 26.197 3.536-3.535L7.134 6.662Z"
          />
          <path
            fill="#DD2033"
            d="m7.134 6.662 3.535-3.536 26.198 26.197-3.536 3.536L7.134 6.662Z"
          />
          <path fill="#F5F7F8" d="M6 35h4.002V9H36V5H6v30Z" />
          <path fill="#DD2033" d="M0 35h6.002V5h30V0H0v35Z" />
        </g>
      </g>
    </CountrySymbol>
  );
});

export default TV_Sharp;
