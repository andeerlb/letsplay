import Button from "@components/button/Button";
import SubPageNavigationHeader from "@components/navigation/SubPageNavigationHeader";
import { useLingui } from "@lingui/react/macro";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";

type SignUpScreenHeaderProps = NativeStackHeaderProps & {
  onNext: () => void;
};

const SignUpScreenHeader = ({ onNext, ...props }: SignUpScreenHeaderProps) => {
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

const SignUpScreenHeaderWrapper = (props: SignUpScreenHeaderProps) => {
  return <SignUpScreenHeader {...props} />;
};

export default SignUpScreenHeaderWrapper;
