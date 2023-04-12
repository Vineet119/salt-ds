// WARNING: This file was generated by a script. Do not modify it manually
import { forwardRef, useState } from "react";

import { CountrySymbol, CountrySymbolProps } from "../country-symbol";

export type BYProps = CountrySymbolProps;

const BY = forwardRef<SVGSVGElement, BYProps>(function BY(props: BYProps, ref) {
  const [uid] = useState(() => props.id || Math.random().toString());

  return (
    <CountrySymbol
      data-testid="BY"
      aria-label="Belarus"
      viewBox="0 0 72 72"
      ref={ref}
      {...props}
    >
      <mask
        id={`${uid}-BY-a`}
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
      >
        <circle cx="36" cy="36" r="36" fill="#D9D9D9" />
      </mask>
      <g mask={`url(#${uid}-BY-a)`}>
        <path fill="#F5F7F8" d="M0 0h72v72H0z" />
        <path fill="#A00009" d="M0 42V0h72v42H0Z" />
        <path fill="#F5F7F8" d="M0 0h24v72H0V0Z" />
        <path
          fill="#A00009"
          fillRule="evenodd"
          d="m5-24 9.725 17.29L9.97 1.746 5.358-6.451 1-4 7.1 6.845l-5.037 8.956-.705-1.252L-3 17l2.194 3.9-6.552 11.649L-3 35l5.063-9L7.1 34.956l-5.037 8.956-4.705-8.363L-7 38l6.194 11.012-2.552 4.537L1 56l1.063-1.889L7.1 63.067.642 74.55 5 77l4.969-8.833 4.788 8.511-6.115 10.87L13 90l4.625-8.222L20 86l4.358-2.451-3.865-6.87L40 42l-4.358-2.451-10.11 17.975-4.789-8.512 5.038-8.956L28 44l4.358-2.451-3.708-6.593L32 29l-4.358-2.451-1.86 3.308-5.039-8.956 4.757-8.457L32 24l4.358-2.451-15.896-28.26L24-13l-4.358-2.451-2.048 3.641-8.236-14.64L5-24Zm17.663 86.623-4.788-8.512-5.038 8.956 4.788 8.512 5.038-8.956Zm-7.656-13.611-5.038 8.956-5.038-8.956 5.038-8.956 5.038 8.956Zm7.906-14.056-5.038 8.956-5.038-8.956L17.875 26l5.038 8.956Zm-7.906-14.055-5.038 8.956-5.038-8.956 5.038-8.957 5.038 8.957Zm7.625-13.556-4.757 8.456-5.038-8.956 4.757-8.456 5.038 8.956Z"
          clipRule="evenodd"
        />
        <path fill="#008259" d="M24 72V42h48v30z" />
      </g>
    </CountrySymbol>
  );
});

export default BY;