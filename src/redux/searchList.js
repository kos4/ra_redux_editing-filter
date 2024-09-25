import {LIST_SEARCH} from "./actions";

const searchList = (query) => {
  return {
    type: LIST_SEARCH,
    payload: query,
  }
};

export default searchList;