import {LIST_EDIT} from "./actions";

const listEdit = (item) => {
  return {
    type: LIST_EDIT,
    payload: {...item},
  }
};

export default listEdit;