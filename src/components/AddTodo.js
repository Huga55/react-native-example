import React, { useState, useContext } from "react";
import { View, TextInput, Keyboard, StyleSheet, Alert } from "react-native";
import { Theme } from "../Theme";
import { AntDesign } from "@expo/vector-icons";
import AppButton from "./../ui/AppButton";
import TodoContext from "../context/todo/todoContext";

const AddTodo = (props) => {
    const { addTodo } = useContext(TodoContext);

    const [value, setValue] = useState("");

    const submitForm = () => {
        if(value.trim()) {
            addTodo(value);
            setValue("");
            Keyboard.dismiss();
        }else {
            Alert.alert("Value have not to be empty...");
        }
    }

    return(
        <View style={styles.block}>
            <TextInput style={styles.input} 
                        value={value} 
                        placeholder="Press text..." 
                        onChangeText={setValue}
                        autoCorrect={false}
                        autoCapitalize="none"/>
            <AppButton onPress={submitForm}>
                <AntDesign name="plus" color="#fff"/>
            </AppButton>
        </View>
    );
}

const styles = StyleSheet.create({
    block: {
        marginBottom: 20,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    input: {
        width: "70%",
        padding: 4,
        borderBottomWidth: 2,
        borderBottomColor: Theme.MAIN_COLOR,
        borderStyle: "solid",
    },
    button: {

    }
});

export default AddTodo;