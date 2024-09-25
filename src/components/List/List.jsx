import ListItem from "./ListItem";
import {useSelector} from "react-redux";

export default function List() {
  const items = useSelector(state => state.list);

  return (
    <ul className="list">
      {
        items.map(item => <ListItem key={item.id} item={item}/>)
      }
    </ul>
  );
}