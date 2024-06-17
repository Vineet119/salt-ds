import { ReactElement, useState } from "react";
import { Button } from "@salt-ds/core";
import { ChevronRightIcon } from "@salt-ds/icons";

export const LoadingButtonsWithLabel = (): ReactElement => {
  const [primaryLoadingState, setPrimaryLoadingState] = useState(false);
  const [secondaryLoadingState, setSecondaryLoadingState] = useState(false);
  const [ctaLoadingState, setCtaLoadingState] = useState(false);

  const handlePrimaryClick = () => {
    setPrimaryLoadingState(true);
    setTimeout(() => {
      setPrimaryLoadingState(false);
    }, 3000);
  };
  const handleSecondaryClick = () => {
    setSecondaryLoadingState(true);
    setTimeout(() => {
      setSecondaryLoadingState(false);
    }, 3000);
  };
  const handleCtaClick = () => {
    setCtaLoadingState(true);
    setTimeout(() => {
      setCtaLoadingState(false);
    }, 3000);
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "auto auto auto",
        gridTemplateRows: "auto",
        gridGap: 10,
      }}
    >
      <Button
        variant="cta"
        showLoadingText
        loadingText="Loading"
        isLoading={ctaLoadingState}
        onClick={handleCtaClick}
      >
        Click to Continue
        <ChevronRightIcon aria-hidden />
      </Button>
      <Button
        variant="primary"
        showLoadingText
        loadingText="Loading"
        isLoading={primaryLoadingState}
        onClick={handlePrimaryClick}
      >
        Next Page
        <ChevronRightIcon aria-hidden />
      </Button>
      <Button
        variant="secondary"
        showLoadingText
        loadingText="Loading"
        isLoading={secondaryLoadingState}
        onClick={handleSecondaryClick}
      >
        Search
        <ChevronRightIcon aria-hidden />
      </Button>
    </div>
  );
};
