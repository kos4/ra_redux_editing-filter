import {FORM_RESET, LIST_EDIT} from './actions'
const initialState = {id: '', name: '', price: ''};
export default function addReducer(state = initialState, action)
{
  switch (action.type) {
    case LIST_EDIT:
      return {...action.payload};
    case FORM_RESET:
      return initialState;
    default:
      return state;
  }
}
