import SubPageNavigationHeader from "@components/navigation/SubPageNavigationHeader";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";

export const SignInScreenHeader = (props: NativeStackHeaderProps) => {
  return <SubPageNavigationHeader {...props} transparent={true} />;
}

const SignInScreenHeaderWrapper = (props: NativeStackHeaderProps) => {
  return (
    <SignInScreenHeader {...props} />
  )
}

export default SignInScreenHeaderWrapper;