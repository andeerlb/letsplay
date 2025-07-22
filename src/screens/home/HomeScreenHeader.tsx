import { useLingui } from "@lingui/react/macro";
import { BottomTabHeaderProps } from "@react-navigation/bottom-tabs";
import MainPageNavigationHeader from "@components/navigation/MainPageNavigationHeader";

export const HomeScreenHeader = ({}: BottomTabHeaderProps) => {
  const { t } = useLingui();
  return (
    <MainPageNavigationHeader title={t`HOME_BOTTOM_MENU`} hideSettings={false} />
  )
};

const HomeScreenHeaderWrapper = (props: BottomTabHeaderProps) => {
  return (
    <HomeScreenHeaderWrapper {...props} />
  )
}

export default HomeScreenHeader;