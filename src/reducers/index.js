export default function reducer(state = {}, action) {
    switch(action.type) {
        case 'SET_TABLE_DATA': 
            return { ...state, tableData: action.payload}
        default:
            return state;
    }
}