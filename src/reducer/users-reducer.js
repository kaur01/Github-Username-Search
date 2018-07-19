export default function(state = { totalCount: 0, users: [] }, action ){
    switch(action.type){
        case "REFRESH-USERS":
                state = {
                    totalCount: action.payload.totalCount,
                    users: action.payload.users
                }
                 return {...state}

        case "USER-DETAILS":
                state.users[action.payload.index].followers = action.payload.followers;
                return{...state}
        default:
                return {...state}
    }
 }
