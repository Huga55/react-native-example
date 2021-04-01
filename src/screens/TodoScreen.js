import React, { useState } from "react";
import {View, Text, Button, StyleSheet} from "react-native";
import ModalEdit from "../Modals/ModalEdit";
import { Theme } from "../Theme";
import AppButton from "../ui/AppButton";
import AppText from "./../ui/AppText";
import { Ionicons } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons'; 

const TodoScreen = (props) => {
    const { todo, goBack, removeTodo, updateTodo } = props;
    const [modalStatus, setModalStatus] = useState(false);

    return(
        <View>
            <ModalEdit status={modalStatus} update={updateTodo} todo={todo} close={() => setModalStatus(false)} />
            <View style={styles.block}>
                <AppText type="bold">{todo.title}</AppText>
                <AppButton onPress={() => setModalStatus(true)} style={{backgroundColor: Theme.MAIN_COLOR}}>
                    <Entypo name="edit" size={16} color="white" />
                </AppButton>
            </View>
            <View style={styles.buttons}>
                <View style={styles.button}>
                    <AppButton style={{backgroundColor: Theme.GRAY_COLOR}} onPress={goBack}>
                        <Ionicons name="ios-arrow-back-outline" size={16} color="white" />
                    </AppButton>
                </View>
                <View style={styles.button}>
                    <AppButton onPress={() => removeTodo(todo.id)} style={{backgroundColor: Theme.DANGER_COLOR}}>
                        <MaterialIcons name="delete-forever" size={16} color="white" />
                    </AppButton>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    block: {
        marginBottom: 15,
        padding: 15,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#fff",
        elevation: 6,
        borderRadius: 8,
    },
    buttons: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    button: {
        width: "40%",
    }
});

export default TodoScreen;