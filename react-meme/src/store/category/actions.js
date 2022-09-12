import { handleHashCategoryById } from "../../helpers";
import categoryService from "../../services/category";

export const ACT_FETCH_ALL_CATEGORIES='ACT_FETCH_ALL_CATEGORIES';

export function actFetchAllCategories(categories) {
  return {
    type: ACT_FETCH_ALL_CATEGORIES,
    payload: {
      categories
    }
  }
}

export function actFetchAllCategoriesAsync() {
  return async (dispatch) => {
    try {
      const response = await categoryService.getList();
      const categories = response.data.categories;
      //const hashCategoryById = handleHashCategoryById(categories);
      dispatch(actFetchAllCategories(categories))
    } catch (error) {
    }
  }
}