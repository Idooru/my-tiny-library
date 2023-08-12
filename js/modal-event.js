export const modalEvent = () => {
  const darkmodeEle = document.querySelector(".darkmode");
  const modalEle = document.querySelector(".modal");

  const modalCloseEvent = () => {
    darkmodeEle.style.display = "none";
    modalEle.style.display = "none";
  };

  modalEle.addEventListener("click", modalCloseEvent);
  darkmodeEle.addEventListener("click", modalCloseEvent);
};
