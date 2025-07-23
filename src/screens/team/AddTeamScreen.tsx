import { TeamStackParamList } from "@components/navigation/teamNavigator";
import { useTheme } from "@context/ThemeProvider";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { getTabBarStyle } from "@utils/theme";
import ScreenWrapper from "@wrapper/ScreenWrapper";
import React, { useEffect } from "react";
import { Text } from "react-native";

type AddScreenNavigationProps = NativeStackNavigationProp<TeamStackParamList, 'Add'>;

type Props = {
    navigation: AddScreenNavigationProps;
};

export default function AddTeamScreen({ navigation }: Props) {
    const { theme } = useTheme();

    useEffect(() => {
        console.log(theme);

        const tabNav = navigation.getParent();
        tabNav?.setOptions({
            tabBarStyle: { display: 'none' },
        });

        return () => {
            tabNav?.setOptions({
                tabBarStyle: getTabBarStyle(theme)
            });
        };
    }, [navigation, theme]);


    return (
        <ScreenWrapper>
            <Text>add team screen</Text>
        </ScreenWrapper>
    )
}