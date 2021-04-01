import React, { useContext } from "react";
import { View, StyleSheet, Alert } from "react-native";
import ScreenContext from "../context/screen/screenContext";
import TodoContext from "../context/todo/todoContext";
import Navbar from "./../components/Navbar";
import MainScreen from "./../screens/MainScreen";
import TodoScreen from "./../screens/TodoScreen";

const MainLayout = () => {
    const { todoId, changeScreen } = useContext(ScreenContext);
    const { todos, addTodo, removeTodo, updateTodo } = useContext(TodoContext);

    
    // const removeTodoFunc = (id) => {
    //     Alert.alert(
    //         "Remove Todo",
    //         `Are you sure to remove "" ?`,
    //         [
    //         {
    //             text: "Cancel",
    //             style: "cancel"
    //         },
    //         { 
    //             text: "Remove", 
    //             style: "destructive",
    //             onPress: () => {
    //                 removeTodo(id);
    //             }
    //         }
    //         ],
    //         {
    //             cancelable: false
    //         }
    //     );
    // }


    return(
        <View>
            <Navbar title="Todo App" />
            <View style={styles.container}>
                {
                !todoId?
                <MainScreen removeTodo={removeTodo} addTodo={addTodo} todos={todos} getTodo={changeScreen} /> :
                <TodoScreen removeTodo={removeTodo} updateTodo={updateTodo} todo={todos.find(t => t.id === todoId)} goBack={() => changeScreen(null)} />
                }
                
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      paddingHorizontal: 30,
      paddingVertical: 20,
    },  
});

export default MainLayout;