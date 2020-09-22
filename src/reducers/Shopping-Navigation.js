import CallFakeStoreAPI from "../Call-fake-store-api";
/**
 * This is the initial Page Layout Reducer
 * Author: Kenji Au
 */
const ShoppingNavigationReducer = (
  state = {
    Search: "",
    Sort: "",
    Browse: "",
    products: CallFakeStoreAPI(),
    previousDisplayProducts: [],
    displayProducts: [...CallFakeStoreAPI()],
  },
  action
) => {
  const stateCopy = { ...state };
  // Create a new array for only items with search term
  let displayCopy = [];
  switch (action.type) {
    case "SEARCH_PRODUCT": {
      // Update the search state
      stateCopy.Search = action.payload;
      // Create a new array for only items with search term
      let displayCopy = [];

      // Add to the array if item contains the search term
      for (const product of state.displayProducts) {
        const productTitle = product.title.toLowerCase();
        if (productTitle.includes(stateCopy.Search)) {
          displayCopy.push(product);
        }
      }

      // Reset back initial product list if the search is empty
      if (stateCopy.Search === "") {
        displayCopy = state.products;
      }
      stateCopy.displayProducts = displayCopy;

      return stateCopy;
    }
    case "SORT_PRODUCT": {
      stateCopy.Sort = action.payload;
      // Sorting Function based on the payload
      return stateCopy;
    }
    case "BROWSE_PRODUCT": {
      if (state.Browse === "") {
        // Change the browse state to the desired input.
        stateCopy.Browse = action.payload;

        // Keep a copy of the current display and save it.
        stateCopy.previousDisplayProducts = state.displayProducts;

        // Loop through the currently displayed products and only add the ones with the right category to the new display
        for (const product of state.displayProducts) {
          if (product.category === action.payload) {
            displayCopy.push(product);
          }
        }

        // Update the copy to show only the new display
        stateCopy.displayProducts = displayCopy;
        return stateCopy;
      } else {
        // Set the browse state to empty.
        stateCopy.Browse = "";
        
        // Update the copy to display the last saved view.
        displayCopy = state.previousDisplayProducts;
        stateCopy.displayProducts = displayCopy;
        return stateCopy;
      }
    }
    case "FILTER_PRODUCT": {
      // Logic for Filtering Products
      break;
    }
    default:
      return state;
  }
};

export default ShoppingNavigationReducer;
