import { searchEvent } from "../events/search-event.js";

export const drawNav = () => {
  const searchButtonEle = document.querySelector("#search-button");

  searchButtonEle.addEventListener("click", searchEvent);
};
