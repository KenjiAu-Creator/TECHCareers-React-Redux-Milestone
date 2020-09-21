import { useCallback } from 'react';
import callFakeStoreAPI from '../Call-Fake-Store-Api';
/**
 * This is the initial Page Layout Reducer
 * Author: Kenji Au
 */
 const PageNavigationReducer = (
   state = {
    Search: "",
    Sort: "",
    Browse: "",
    displayProducts: [callFakeStoreAPI()]
  },
  action) => {
   switch (action.type) {
     case ("SEARCH_PRODUCT"):
     {
        // Logic for Searching for Product
        break;
     }
     case ("SORT_PRODUCT"):
     {
        // Logic for Sorting Products
        break;
     }
     case ("BROWSE_PRODUCT"):
     {
        // Logic for Browsing categories of Products
        break;
     }
     case ("FILTER_PRODUCT"):
     {
        // Logic for Filtering Products
        break;
     }
     default:
        return state;
   };
 };

 export default PageNavigationReducer;