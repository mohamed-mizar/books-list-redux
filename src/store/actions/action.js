import * as actionType from "./actionTypes";
import axios from "axios";

export const editMode = () => {
  return {
    type: actionType.EDIT_MODE,
  };
};

export const exitEditMode = () => {
  return {
    type: actionType.EXIT_EDIT_MODE,
  };
};

export const setCategories = (categories) => {
  return {
    type: actionType.SET_CATEGORIES,
    categories: categories,
  };
};

export const fechCategoriesFailed = () => {
  return {
    type: actionType.FECH_CATEGORIES_FALILED,
  };
};

export const initCategoreis = () => {
  return (dispatch) => {
    axios
      .get("https://books-json-server.herokuapp.com/categories")
      .then((response) => {
        dispatch(setCategories(response.data));
        console.log("category", response.data);
      })
      .catch((error) => {
        dispatch(fechCategoriesFailed());
      });
  };
};

export const seAuthors = (authors) => {
  return {
    type: actionType.SET_AUTHORS,
    authors: authors,
  };
};

export const fechAuthorsFailed = () => {
  return {
    type: actionType.FECH_AUTHORS_FALILED,
  };
};

export const initAuthors = () => {
  return (dispatch) => {
    axios
      .get("https://books-json-server.herokuapp.com/authors")
      .then((response) => {
        dispatch(seAuthors(response.data));
        console.log("Authors", response.data);
      })
      .catch((error) => {
        dispatch(fechAuthorsFailed());
      });
  };
};
