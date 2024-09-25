import {useDispatch, useSelector} from "react-redux";
import listAdd from "../../redux/listAdd";
import listEdit from "../../redux/listEdit";
import formReset from "../../redux/formReset";

export default function Form() {
  const dispatch = useDispatch();
  const {id, name, price} = useSelector(state => state.add);
  const handlerSubmit = event => {
    event.preventDefault();
    const formData = Object.fromEntries(new FormData(event.target).entries());

    if (formData.id) {
      dispatch(listEdit(formData));
    } else {
      dispatch(listAdd(formData));
    }
    dispatch(formReset());
  };

  const handlerReset = event => {
    event.preventDefault();
    dispatch(formReset());
  };

  return (
    <form action="" className="form" onSubmit={handlerSubmit}>
      <input type="hidden" name="id" defaultValue={id}/>
      <div className="form__group">
        <label className="form__label" htmlFor="name">Name</label>
        <input type="text" name="name" id="name" className="form__input" defaultValue={name}/>
      </div>
      <div className="form__group">
        <label className="form__label" htmlFor="price">Price</label>
        <input type="text" name="price" id="price" className="form__input" defaultValue={price}/>
      </div>
      <div className="form__group">
        <button className="form__button">Save</button>
        <button className="form__button" onClick={handlerReset} type="button">Cancel</button>
      </div>
    </form>
  );
}