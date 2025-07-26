import Button from "@components/button/Button";
import SubPageNavigationHeader from "@components/navigation/SubPageNavigationHeader";
import { useLingui } from "@lingui/react/macro";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";

type SportScreenHeaderProps = NativeStackHeaderProps & {
  onNext: () => void;
};

const SportScreenHeader = ({ onNext, ...props }: SportScreenHeaderProps) => {
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

const SportScreenHeaderWrapper = (props: SportScreenHeaderProps) => {
  return <SportScreenHeader {...props} />;
};

export default SportScreenHeaderWrapper;
