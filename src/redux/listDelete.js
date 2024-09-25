import { LIST_DELETE } from "./actions"

const listDelete = (id) => {
  return {
    type: LIST_DELETE,
    payload: id,
  }
}

export default listDelete;