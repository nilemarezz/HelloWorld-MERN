export const getItems = (state=[],action) =>{
    switch(action.type){
        case 'GET_ITEM':
            return action.payload;
        case 'DELETE_ITEM':
            console.log(action.payload.id)
            return state.filter(item => item._id !== action.payload.id)
        default: 
            return state;
    }

}

