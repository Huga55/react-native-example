import React, { useContext } from "react";
import { View, FlatList, Image, StyleSheet } from "react-native";
import AddTodo from "../components/AddTodo";
import Todo from "../components/Todo";
import ScreenContext from "../context/screen/screenContext";
import TodoContext from "../context/todo/todoContext";

const MainScreen = () => {
    const { todos, addTodo } = useContext(TodoContext);

    return(
        <View>
            <AddTodo onSubmit={addTodo} />
            {
                todos.length > 0?
                <FlatList 
                keyExtractor={(item) => item.id}
                data={todos}
                renderItem={({item}) => <Todo info={item} />} 
                /> :
                <View style={styles.imgWrapper}>
                    <Image source={require("../../assets/empty.png")} style={styles.img} />
                </View>
            }
            
        </View>
    );
}

const styles = StyleSheet.create({
    imgWrapper: {
        height: 200,
    },
    img: {
        width: "100%",
        height: "100%",
        resizeMode: "contain",
    }
});

export default MainScreen;