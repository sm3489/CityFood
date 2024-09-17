import { createContext, useReducer, useContext } from "React";

const initialState = {
    count: 0,
    isShowProduct: false,
};

function reducer(state, action) {
    switch (action) {
        case Active.increment:
            state.count += 1;
            return { ...state };
        case Active.decrement:
            state.count -= 1;
            return { ...state};
        case Active.openProductModal:
            state.isShowProduct = true;
            return { ...state };
        case Active.closeProductModal:
            state.isShowProduct = true;
            return { ...state};
        default:
            throw new Error();
    }
}

const Context = createContext();

export function useStore() {
    return useContext(Context);
}

export function StoreProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    );
}

