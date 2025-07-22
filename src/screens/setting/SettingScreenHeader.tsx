import SubPageNavigationHeader from "@components/navigation/SubPageNavigationHeader";
import { useLingui } from "@lingui/react/macro";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";

export const SettingScreenHeader = (props: NativeStackHeaderProps) => {
  const { t } = useLingui();
  return <SubPageNavigationHeader {...props} title={t`SETTING_SCREEN_TITLE`} />;
}

const SettingScreenHeaderWrapper = (props: NativeStackHeaderProps) => {
  return (
    <SettingScreenHeader {...props} />
  )
}

export default SettingScreenHeaderWrapper;