const initalState ={
    personData : {
        personName : '',
        personId : '',
        cardNumber : '',
        createdDate : ''
    },
    visitors : []
}

export default function visitorReducer  (state = initalState, action) {
    switch (action.type) {
        case "CREATE_VISITORS":
        return{
            ...state,
            personData : action.payload,
        }
        case "GET_VISITORS":
            return {
                ...state,
                visitors : [...action.payload]
            }
            case "REMOVE_VISITORS":
                const newVisitors = state.visitors.filter(el =>{
                    return el.id !== action.payload
                })
                return{
                    ...state,
                  visitors : newVisitors
                }
            case "UPDATE_VISITORS":
                const findEvent = state.visitors.find((event) => {
                    return event.id === action.payload
                });
                return {
                    ...state,
                    personData: findEvent
                };
                case "RESET_VISITORS":
                    return{
                      ...state,
                      personData : action.payload
                    };
        default:
            return state;
    }
}