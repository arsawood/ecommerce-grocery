export const initialState = {
  basket: [
    // {
    //   id: "1002",
    //   title: "The Lean Startup: How Constant ",
    //   price: "36.48",
    //   rating: "4",
    //   image:
    //     "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR9vXtbOXcijXWkIMWbRImljYEjO0bs64ieDBslSjsYTeDozVFcB_YzWSKmLiR9d1dTPAeSuTSTvH992EpovoToglJ1xNeBYnFq7WTpH-A&usqp=CAc",
    // },
  ],
  user: null,
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      // logic to add to basket
      return { ...state, basket: [...state.basket, action.item] };
    case "REMOVE_FROM_BASKET":
      // logic to remove from basket
      let newBasket = [...state.basket];
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      if (index >= 0) {
        // item exists in the basket, remove it
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as it is not in the basket`
        );
      }
      return { ...state, basket: newBasket };
    default:
      return state;
  }
};
export default reducer;
