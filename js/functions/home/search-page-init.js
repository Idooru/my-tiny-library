import { searchPagefunctions } from "../../data/search-page-functions.js";

const searchPageInit = () => {
  searchPagefunctions.forEach((item) => item());
};

searchPageInit();
