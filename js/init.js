import { drawBook } from "./draw-book.js";
import { modalEvent } from "./modal-event.js";

const init = () => {
  const functions = [drawBook, modalEvent];

  functions.forEach((item) => item());
};

init();
