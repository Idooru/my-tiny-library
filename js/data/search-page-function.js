import { drawNav } from "../functions/components/draw-nav.js";
import { drawSearch } from "../functions/components/draw-search.js";
import { modalEvent } from "../functions/events/modal-event.js";
import { searchEvent } from "../functions/events/search-event.js";

export const searchPagefunctions = [
  drawSearch,
  drawNav,
  modalEvent,
  searchEvent,
];
