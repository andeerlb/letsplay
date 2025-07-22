import MainPageNavigationHeader from "@components/navigation/MainPageNavigationHeader";
import { useLingui } from "@lingui/react/macro";
import { BottomTabHeaderProps } from "@react-navigation/bottom-tabs";

export const ProfileScreenHeader = ({}: BottomTabHeaderProps) => {
    const { t } = useLingui();
    return (
      <MainPageNavigationHeader title={t`PROFILE_BOTTOM_MENU`} />
    )
};