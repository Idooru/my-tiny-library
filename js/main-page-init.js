import { drawBook } from "./draw-book.js";
import { drawNav } from "./draw-nav.js";
import { modalEvent } from "./modal-event.js";

const mainPageInit = () => {
  const functions = [drawBook, drawNav, modalEvent];

  functions.forEach((item) => item());
};

mainPageInit();
