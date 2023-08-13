import { searchEvent } from "../events/search-event.js";

export const drawNav = () => {
  const inputButtonEle = document.querySelector(".input-button");

  inputButtonEle.addEventListener("click", searchEvent);
};