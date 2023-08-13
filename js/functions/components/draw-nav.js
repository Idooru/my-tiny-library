import { searchEvent } from "../events/search-event.js";
import { addEvent } from "../events/add-event.js";

export const drawNav = () => {
  const searchButtonEle = document.querySelector("#search-button");
  const addButtonEle = document.querySelector("#add-button");

  searchButtonEle.addEventListener("click", searchEvent);
  addButtonEle.addEventListener("click", addEvent);
};
