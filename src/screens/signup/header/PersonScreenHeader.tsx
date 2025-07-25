import Button from "@components/button/Button";
import SubPageNavigationHeader from "@components/navigation/SubPageNavigationHeader";
import { useLingui } from "@lingui/react/macro";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";

type PersonScreenHeaderProps = NativeStackHeaderProps & {
  onNext: () => void;
};

const PersonScreenHeader = ({ onNext, ...props }: PersonScreenHeaderProps) => {
  const { t } = useLingui();

  return (
    <SubPageNavigationHeader
      {...props}
      title=""
      RightAction={() => (
        <Button label={t`screen.signup.next`} onPress={onNext} />
      )}
    />
  );
};

const PersonScreenHeaderWrapper = (props: PersonScreenHeaderProps) => {
  return <PersonScreenHeader {...props} />;
};

export default PersonScreenHeaderWrapper;
