<<<<<<< HEAD
/* Shopping Browsing Actions - Add/Delete/Increase Qty/Decrease Qty/Set Qty*/

=======
/* Action to update search term */
>>>>>>> 8b9b2c4e390ff79250ce1d61835d2ed405d78f2b
const Search = (userInput) => {
  return {
    type: "SEARCH_PRODUCT",
    payload: userInput
  }
}
/* Action to update sorting method */
const Sort = (userInput) => {
  return {
    type: "SORT_PRODUCT",
    payload: userInput
  }
}
/* Action to update browse option */
const Browse = (userInput) => {
  return {
    type: "BROWSE_PRODUCT",
    payload: userInput
  }
}
/* Action to update filter method */
const Filter = (userInput) => {
  return {
    type: "FILTER_PRODUCT",
    payload: userInput
  }
}
/* Action to initially populate the store with products */
const InitialProductAdd = (productList) => {
  return {
    type: "INITIAL_LIST",
    payload: productList
  };
};

export {Search, Sort, Browse, Filter, InitialProductAdd} ;