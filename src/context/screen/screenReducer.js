
export const CHANGE_SCREEN = "CHANGE_SCREEN";

const handlers = {
    [CHANGE_SCREEN]: (state, {id}) => ({
        ...state,
        todoId: id
    }),
    DEFAULT: state => state
}

const screenReducer = (state, action) => {
    const handler = handlers[action.type];
    return handler(state, action);
}

export default screenReducer;