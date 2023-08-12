export const error = (errorCase) => {
  const contentItemsEle = document.querySelector(".content-items");
  const errorEle = document.querySelector(".error");
  const errorContentEle = document.createElement("p");
  const buttons = document.createElement("button");

  contentItemsEle.style.display = "none";
  buttons.className = "error-page-button";
  errorEle.style.display = "block";

  switch (errorCase) {
    case "over flow length":
      errorContentEle.innerText =
        "책 제목의 길이가 25글자를 넘지 않게 해주세요!";
      buttons.innerText = "수정";
      errorEle.appendChild(errorContentEle);
      errorEle.appendChild(buttons);
      break;
    case "not found name":
      errorContentEle.innerText = "첵 재목이 존재하지 않습니다!";
      break;
  }
};
