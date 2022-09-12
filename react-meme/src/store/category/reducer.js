import { ACT_FETCH_ALL_CATEGORIES } from "./actions";

const intState = {
  categories: {}
}

function reducer(categoryState = intState, action) {
  switch (action.type) {
    case ACT_FETCH_ALL_CATEGORIES:
      return {
        ...categoryState,
        categories: action.payload.categories
      }
    default:
      return categoryState
  }
}

export default reducer;