import { mainPageFunctions } from "../../data/main-page-functions.js";

const mainPageInit = () => {
  mainPageFunctions.forEach((item) => item());
};

mainPageInit();
