import MainPageNavigationHeader from "@components/navigation/MainPageNavigationHeader";
import { useLingui } from "@lingui/react/macro";
import { BottomTabHeaderProps } from "@react-navigation/bottom-tabs";

const ProfileScreenHeader = ({}: BottomTabHeaderProps) => {
    const { t } = useLingui();
    return (
      <MainPageNavigationHeader title={t`screen.profile.title`} />
    )
};

const ProfileScreenHeaderWrapper = (props: BottomTabHeaderProps) => {
  return (
    <ProfileScreenHeader {...props} />
  )
}

export default ProfileScreenHeaderWrapper;