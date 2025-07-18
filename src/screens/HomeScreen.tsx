import ScreenWrapper from "@src/wrapper/ScreenWrapper";
import { StyleSheet, Text } from "react-native";

function HomeScreen() {
    return (
        <ScreenWrapper>
            <Text style={styles.text}>
                Welcome,{' '}
                <Text style={[styles.text, styles.userName]}>
                    Anderson
                </Text>
            </Text>
        </ScreenWrapper>
    );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Armavir01-Bold',
    fontSize: 20,
  },
  userName: {
    color: '#256b35ff',
  },
});

export default HomeScreen;