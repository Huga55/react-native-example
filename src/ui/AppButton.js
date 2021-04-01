import React from "react";
import {View, StyleSheet, TouchableOpacity, Platform, TouchableNativeFeedback} from "react-native";
import { Theme } from "../Theme";
import AppText from "./AppText";

const AppButton = (props) => {
    const { style = {backgroundColor: Theme.MAIN_COLOR}, styleText = {}, onPress, children } = props;

    const Wrapper = Platform.OS === "android"? TouchableNativeFeedback : TouchableOpacity;

    return(
        <Wrapper onPress={onPress}>
            <View style={{...styles.button, ...style}}>
                <AppText type="bold" style={styleText}>
                    {children}
                </AppText>
            </View>
        </Wrapper>
    );
}

const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    }
});

export default AppButton;