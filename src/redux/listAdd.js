import { LIST_ADD } from "./actions"

const listAdd = (formData) => {
  return {
    type: LIST_ADD,
    payload: formData,
  }
}

export default listAdd;