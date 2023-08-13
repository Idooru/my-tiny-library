import { searchPagefunctions } from "../../data/search-page-function.js";

const searchPageInit = () => {
  searchPagefunctions.forEach((item) => item());
};

searchPageInit();
