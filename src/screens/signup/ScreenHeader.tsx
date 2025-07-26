import Button from "@components/button/Button";
import SubPageNavigationHeader from "@components/navigation/SubPageNavigationHeader";
import { useLingui } from "@lingui/react/macro";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import React, { useCallback } from "react";

type SignUpScreenHeaderProps = NativeStackHeaderProps & {
  onNext?: () => void;
  position?: string;
  transparent?: boolean
};

const RightActionButton = ({ onNext }: { onNext: () => void }) => {
  const { t } = useLingui();
  return <Button label={t`screen.signup.next`} onPress={onNext} />;
};

const SignUpScreenHeader = ({ onNext, ...props }: SignUpScreenHeaderProps) => {
  const rightAction = useCallback(() => {
    if (!onNext) return null;
    return <RightActionButton onNext={onNext} />;
  }, [onNext]);

  return (
    <SubPageNavigationHeader
      {...props}
      title=""
      RightAction={rightAction}
    />
  );
};

const SignUpScreenHeaderWrapper = (props: SignUpScreenHeaderProps) => {
  return <SignUpScreenHeader {...props} />;
};

export default SignUpScreenHeaderWrapper;
