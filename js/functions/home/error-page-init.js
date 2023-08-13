import { errorPageFunctions } from "../../data/error-page-functions.js";

const errorPageInit = () => {
  errorPageFunctions.forEach((item) => item());
};

errorPageInit();
