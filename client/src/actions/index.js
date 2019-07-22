export const getItemAction = () =>{
    return async dispatch=>{
        console.log('action use')
        const response = await fetch("/api/items");
        const data = await response.json();
        
        dispatch({type:'GET_ITEM',payload:data})
    }
}