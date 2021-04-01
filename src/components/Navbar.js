import React from "react";
import { View, Platform, StyleSheet } from "react-native";
import { Theme } from "../Theme";
import AppText from "./../ui/AppText";


const Navbar = (props) => {
    const { title } = props;

    return(
        <View style={{...styles.navbar, ...Platform.select({
            android: styles.navbarAndroid,
            ios: styles.navbarIos,
        })}}>
            <AppText type="bold" style={styles.text}>{title}</AppText>
        </View>
    );
}


const styles = StyleSheet.create({
    navbar: {
        height: 100,
        paddingBottom: 20,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    navbarAndroid: {
        backgroundColor: Theme.MAIN_COLOR,
    },
    navbarIos: {
        backgroundColor: "#fff",
    },
    text: {
        color: Platform.OS === "android"? "#fff" : Theme.MAIN_COLOR,
        fontSize: 20,
    }
});

export default Navbar;