import css from "./SearchBox.module.css";
import { useId } from "react";

function SearchBox() {
  const searchId = useId();
  return (
    <>
      <label className={css.label} htmlFor={searchId}>
        Find contacts by name
      </label>
      <input className={css.input} type="text" id={searchId} />
    </>
  );
}
export default SearchBox;
