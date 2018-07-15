export default function(state = { totalCount: 0, users: [] }, action ){
    switch(action.type){
        case "REFRESH-USERS":
        state = {
            totalCount: action.payload.totalCount,
            users: action.payload.users
        }
        console.log({...state})
        return {...state}
        default: return {...state}
    }
 }