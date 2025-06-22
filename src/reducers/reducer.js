// Example imports for images; adjust the paths as needed for your project structure

export const initialState = {
    route: "create",
    downloaded: [],
    generated: [],
    isLoading: false,
    error: null,
    sending: false,
    progress: 0,
    stopGeneration: false,
};

export function pollinationReducer(state, action) {
    switch (action.type) {
        case "SET_ROUTE":
            return { ...state, route: action.payload };
        case "ADD_DOWNLOADED":
            return {
                ...state,
                downloaded: [...state.downloaded, action.payload],
            };
        case "SET_GENERATED":
            return { ...state, generated: action.payload };
        case "DELETE_DOWNLOADED":
            return {
                ...state,
                downloaded: state.downloaded.filter(
                    (img) => img.alt !== action.payload
                ),
            };
        case "SET_LOADING":
            return { ...state, isLoading: action.payload };
        case "SET_ERROR":
            return { ...state, error: action.payload };
        case "SET_SENDING":
            return { ...state, sending: action.payload };
        case "STOP_GENERATION":
            return { ...state, stopGeneration: action.payload };
        case "SET_PROGRESS":
            return {
                ...state,
                progress: action.payload,
            };
        default:
            return state;
    }
}
