export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";

const handlers = {
    [ADD_TODO]: (state, {title}) => ({
        ...state,
        todos: [...state.todos, {id: Date.now().toString(), title}]
    }),
    [REMOVE_TODO]: (state, {id}) => ({
        ...state,
        todos: state.todos.filter(t => t.id !== id)
    }),
    [UPDATE_TODO]: (state, {id, title}) => ({
        ...state,
        todos: state.todos.map(t => {
            if(t.id === id) {
                t.title = title;
            }
            return t;
        })
    }),
    DEFAULT: state => state
}

const todoReducer = (state, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT;
    return handler(state, action);
}

export default todoReducer;