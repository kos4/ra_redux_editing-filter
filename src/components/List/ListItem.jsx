import {useDispatch, useSelector} from "react-redux";
import listDelete from "../../redux/listDelete";
import listEdit from "../../redux/listEdit";
import formReset from "../../redux/formReset";

export default function ListItem({item}) {
  const list = useSelector(state => state.list);
  const dispatch = useDispatch();
  const handlerEdit = id => {
    const item = list.find(i => i.id === id);
    dispatch(listEdit(item));
  };
  const handlerDelete = id => {
    dispatch(listDelete(id));
    dispatch(formReset());
  };

  return (
    <li className="list__item">
      <div className="list__item-name">{item.name}</div>
      <div className="list__item-price">{item.price}</div>
      <div className="list__item-actions">
        <button className="list__item-button" type="button" onClick={() => handlerEdit(item.id)}>Edit</button>
        <button className="list__item-button" type="button" onClick={() => handlerDelete(item.id)}>Delete</button>
      </div>
    </li>
  );
}