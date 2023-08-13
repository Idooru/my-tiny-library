import { addPageFunctions } from "../../data/add-page-function.js";

const addPageInit = () => {
  addPageFunctions.forEach((item) => item());
};

addPageInit();
