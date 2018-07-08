const initialState = {
    // user: {
    //     id: '',
    //     role: ''
    // }

    account: {
        id: '',
        number: ''
        }
    };


// const initialState = []


const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ON_SUBMIT': 
            return {...state, account: {
                ...state.user,
                ...action.payload
            }}
        default:
            return state;
    }
}

export default rootReducer;
