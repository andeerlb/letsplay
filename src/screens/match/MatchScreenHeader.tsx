import { BottomTabHeaderProps } from "@react-navigation/bottom-tabs";
import MainPageNavigationHeader from "@components/navigation/MainPageNavigationHeader";
import { useLingui } from "@lingui/react/macro";
import React from "react";

export const MatchScreenHeader = ({}: BottomTabHeaderProps) => {
    const { t } = useLingui();
    return (
      <MainPageNavigationHeader title={t`screen.match.title`} />
    )
}

const MatchScreenHeaderWrapper = (props: BottomTabHeaderProps) => {
  return (
    <MatchScreenHeader {...props} />
  )
}

export default MatchScreenHeaderWrapper;