import {useDispatch} from "react-redux";
import searchList from "../../redux/searchList";

export default function Search() {
  const dispatch = useDispatch();
  const handlerSubmit = event => {
    event.preventDefault();
    const formData = Object.fromEntries(new FormData(event.target).entries());

    dispatch(searchList(formData.search))
  }

  return (
    <form className="form-serach" action="" onSubmit={handlerSubmit}>
      <input type="text" name="search"/>
      <button>Search</button>
    </form>
  );
}