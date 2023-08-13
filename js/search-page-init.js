import { drawNav } from "./draw-nav.js";
import { drawSearch } from "./draw-search.js";
import { modalEvent } from "./modal-event.js";
import { searchEvent } from "./search-event.js";

const searchPageInit = () => {
  const functions = [drawSearch, drawNav, modalEvent, searchEvent];

  functions.forEach((item) => item());
};

searchPageInit();
