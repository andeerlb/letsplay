import { NavigatorScreenParams } from "@react-navigation/native";

export type AuthStackParamList = {
    Bottom: NavigatorScreenParams<BottomTabParamList>;
    Setting: undefined;
};

export type BottomTabParamList = {
    Home: undefined;
    Match: undefined;
    Team: undefined;
    Profile: undefined;
};

export type NoAuthStackParamList = {
    SignIn: undefined;
    Welcome: undefined;
    SignUp: undefined;
};

export type RootStackParamList = {
    Auth: NavigatorScreenParams<AuthStackParamList>;
    NoAuth: NavigatorScreenParams<NoAuthStackParamList>;
};

export type SignUpStackParamList = {
    Person: undefined,
    Sport: undefined;
    MoreSports: undefined;
    Credentials: undefined;
};

export type TeamStackParamList = {
    Main: undefined,
    Add: undefined;
};