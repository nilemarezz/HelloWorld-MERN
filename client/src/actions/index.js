export const getItemAction = () => {
  return async dispatch => {
    const response = await fetch("/api/items");
    const data = await response.json();

    dispatch({ type: "GET_ITEM", payload: data });
  };
};

export const deleteItemAction = id => {
  return async dispatch => {
    const response = await fetch(`/api/items/${id}`, {
      method: "DELETE"
    });
    const data = await response.json();

    dispatch({ type: "DELETE_ITEM", payload: data });
  };
};
