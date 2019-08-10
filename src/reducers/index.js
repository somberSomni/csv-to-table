export default function reducer(state = {}, action) {
    switch(action.type) {
        case 'SET_TABLE_DATA': 
            return { 
                ...state, 
                tableData: action.payload.tableData, 
                rowByTen: action.payload.rowByTen,
                rowNum: 0
            }
        case 'INCREMENT_ROW':
            return {
                ...state,
                rowNum: state.rowNum + 1
            }
        default:
            return state;
    }
}