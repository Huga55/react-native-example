import React, { useReducer } from "react";
import ScreenContext from "./screenContext";
import screenReducer, {CHANGE_SCREEN} from "./screenReducer";

const initialState = {
    todoId: null,       
}

const ScreenState = (props) => {
    const {children} = props;

    const [state, dispatch] = useReducer(screenReducer, initialState);

    const changeScreen = id => dispatch({type: CHANGE_SCREEN, id});

    return(
        <ScreenContext.Provider value={{
            todoId: state.todoId,
            changeScreen
        }}>
            {children}
        </ScreenContext.Provider>
    );
}

export default ScreenState;