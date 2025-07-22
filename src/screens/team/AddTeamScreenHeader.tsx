import SubPageNavigationHeader from "@components/navigation/SubPageNavigationHeader";
import { useLingui } from "@lingui/react/macro";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";

export const AddTeamHeader = (props: NativeStackHeaderProps) => {
  const { t } = useLingui();
  return <SubPageNavigationHeader {...props} title={t`ADD_TEAM_TITLE`} />;
}

const AddTeamHeaderWrapper = (props: NativeStackHeaderProps) => {
  return (
    <AddTeamHeader {...props} />
  )
}

export default AddTeamHeaderWrapper;