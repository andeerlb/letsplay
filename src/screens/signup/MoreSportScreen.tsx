import { SignUpStackParamList } from '@components/navigation/signUpNavigator';
import { useTheme } from '@context/ThemeProvider';
import { yupResolver } from '@hookform/resolvers/yup';
import { useLingui } from '@lingui/react/macro';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import ScreenScrollWrapper from '@wrapper/ScreenScrollWrapper';
import React, { forwardRef, useImperativeHandle } from 'react';
import { useForm } from 'react-hook-form';
import { View } from 'react-native';
import * as yup from 'yup';

export type MoreSportsScreenRef = {
    submitForm: () => void;
};

type MoreSportsScreenProps = {
    navigation: NativeStackNavigationProp<SignUpStackParamList, 'MoreSports'>;
};

const schema = yup.object({});

const MoreSportsScreen = forwardRef<MoreSportsScreenRef, MoreSportsScreenProps>(({ navigation }, ref) => {
    const { theme } = useTheme();
    const { i18n, t } = useLingui();


    const {
        handleSubmit,
    } = useForm({ resolver: yupResolver(schema) });

    useImperativeHandle(ref, () => ({
        submitForm: () => {
            handleSubmit(() => {
                navigation.navigate('Credentials');
            })();
        },
    }));

    return (
        <ScreenScrollWrapper>
            <View />
        </ScreenScrollWrapper>
    );
});

export default MoreSportsScreen;
