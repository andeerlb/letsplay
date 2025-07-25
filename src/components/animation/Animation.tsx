import React, { useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import LottieView from 'lottie-react-native';
import Animations from '@constants/animations';

type Animations = {
    source: typeof Animations[keyof typeof Animations];
    width?: number,
    height?: number
}

export function Animation({ source, width = 400, height = 200 }: Animations) {
    const animation = useRef<LottieView>(null);

    return (
        <View style={styles.animationContainer}>
            <LottieView
                autoPlay
                ref={animation}
                style={{
                    width,
                    height
                }}
                source={source}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    animationContainer: {
        alignItems: 'center',
    },
});