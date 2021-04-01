import React from "react";
import { Text, StyleSheet } from "react-native";

const AppText = (props) => {
    const { type, children, style } = props

    const styles = StyleSheet.create({
        default: {
            fontFamily: type === "regular"? "roboto-regular" : "roboto-bold",
        }
    });

    return(
        <Text style={{...styles.default, ...style}}>{children}</Text>
    );
}

export default AppText;