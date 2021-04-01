import React, { useContext, useReducer } from "react";
import { Alert } from "react-native";
import ScreenContext from "../screen/screenContext";
import TodoContext from "./todoContext";
import todoReducer, { ADD_TODO, REMOVE_TODO, UPDATE_TODO } from "./todoReducer";

const TodoState = (props) => {
    const { children } = props;

    const initialState = {
        todos: [
            {id: "1", title: "Todo number 1"}
        ]
    }
    const { changeScreen } = useContext(ScreenContext);
    const [state, dispatch] = useReducer(todoReducer, initialState);

    const addTodo = title => dispatch({type: ADD_TODO, title});
    const removeTodo = id => {
        const todo = state.todos.find(t => t.id === id);

        Alert.alert(
            "Remove Todo",
            `Are you sure to remove "${todo.title}" ?`,
            [
            {
                text: "Cancel",
                style: "cancel"
            },
            { 
                text: "Remove", 
                style: "destructive",
                onPress: () => {
                    changeScreen(null);
                    dispatch({type: REMOVE_TODO, id});
                }
            }
            ],
            {
                cancelable: false
            }
        );
        
    }
    const updateTodo = (id, title) => dispatch({type: UPDATE_TODO, id, title});

    return(
        <TodoContext.Provider value={{
            todos: state.todos,
            addTodo,
            removeTodo,
            updateTodo
        }}>
            {children}
        </TodoContext.Provider>
    );
}

export default TodoState;