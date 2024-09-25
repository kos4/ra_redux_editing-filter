import {nanoid} from 'nanoid';
import {LIST_ADD, LIST_DELETE, LIST_EDIT, LIST_SEARCH} from './actions';

const initialState = [
  {
    id: nanoid(),
    name: 'Замена стекла',
    price: 1000,
  },
  {
    id: nanoid(),
    name: 'Замена дисплея',
    price: 23000,
  }
];
let saveData;

export default function listReducer(state = initialState, action) {
  switch (action.type) {
    case LIST_ADD:
      let {id, name, price} = action.payload;
      id = id ? id : nanoid();
      return [...state, {id, name, price: Number(price)}];
    case LIST_DELETE:
      return state.filter(i => i.id !== action.payload);
    case LIST_EDIT:
      const item = action.payload;
      return state.reduce((a, i) => {
        if (item.id === i.id) {
          i = item;
        }
        a.push(i);

        return a;
      }, []);
    case LIST_SEARCH:
      const query = action.payload.toLowerCase();
      if (query) {
        saveData = state;
        return state.reduce((a, i) => {
          if (i.name.toLowerCase().includes(query)) {
            a.push(i);
          }

          return a;
        }, []);
      } else {
        return [...saveData];
      }
    default:
      return state;
  }
}