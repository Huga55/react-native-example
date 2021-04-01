import React, { useContext } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import ScreenContext from "../context/screen/screenContext";
import TodoContext from "../context/todo/todoContext";
import AppText from "./../ui/AppText";

const Todo = (props) => {
    const { info } = props;
    const { removeTodo } = useContext(TodoContext);
    const { changeScreen } = useContext(ScreenContext);

    const handleLongPress = () => {
        removeTodo(info.id);
    }

    return(
        <TouchableOpacity onLongPress={handleLongPress} activeOpacity={0.5} onPress={() => changeScreen(info.id)}>
            <View style={styles.block}>
                <AppText type="regular" style={styles.text}>{info.title}</AppText>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    block: {
        padding: 6,
        marginVertical: 4,
        borderStyle: "solid",
        borderWidth: 3,
        borderColor: "#eee",
    },
    text: {
        fontSize: 16,
    },
});

export default Todo;