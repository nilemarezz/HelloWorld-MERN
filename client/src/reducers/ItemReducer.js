export const getItems = (state=[],action) =>{
    switch(action.type){
        case 'GET_ITEM':
            return action.payload;
        case 'DELETE_ITEM':
            console.log(action.payload.id)
            return state.filter(item => item._id !== action.payload.id)
        case 'ADD_ITEM':
            return [...state, { name: action.payload.name }]
        default: 
            return state;
    }

}

