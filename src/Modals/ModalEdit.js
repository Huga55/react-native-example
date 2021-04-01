import React, { useState } from "react";
import { View, TextInput, Modal, Button, StyleSheet, Alert } from "react-native";
import { Theme } from "../Theme";
import AppButton from "./../ui/AppButton";

const ModalEdit = (props) => {
    const { status, close, todo, update } = props;
    const { id, title } = todo;
    const [text, setText] = useState(title);

    const handleUpdate = () => {
        if(text.trim().length < 3) {
            Alert.alert(
                "Error!",
                `Length of name must be more than 3, now is "${text.trim().length}".`,
            );
        }else {
            update(id, text);
            close();
        }
    }

    const handleCancel = () => {
        setText(title);
        close();
    }

    return(
        <Modal transparent={false} visible={status} animationType="slide">
            <View style={styles.block}>
                <TextInput style={styles.input}
                            autoCapitalize="none"
                            autoCorrect={false}
                            placeholder="Input name of todo..."
                            value={text}
                            onChangeText={setText}
                            />
                <View style={styles.buttons}>
                    <AppButton style={{backgroundColor: Theme.GRAY_COLOR}} styleText={{color: "white"}} onPress={handleCancel}>
                        Cancel
                    </AppButton>
                    <AppButton style={{backgroundColor: Theme.MAIN_COLOR}} styleText={{color: "white"}} onPress={handleUpdate}>
                        Update
                    </AppButton>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    block: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    input: {
        width: 190,
        marginBottom: 20,
        borderBottomColor: Theme.MAIN_COLOR,
        borderBottomWidth: 2,
        borderStyle: "solid",
    },
    buttons: {
        width: 190,
        flexDirection: "row",
        justifyContent: "space-between",
    }
});

export default ModalEdit;