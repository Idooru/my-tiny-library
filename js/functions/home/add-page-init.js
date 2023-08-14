import { addPageFunctions } from "../../data/add-page-functions.js";

const addPageInit = () => {
  addPageFunctions.forEach((item) => item());
};

addPageInit();
