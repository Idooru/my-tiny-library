import { info } from "./info.js";

const drawError = () => {
  const [[, contentMessage], [, buttonMessage]] = new URLSearchParams(
    window.location.search
  );
  const errorEle = document.querySelector("#error");
  const errorContentEle = document.createElement("p");
  const errorButtonEle = document.createElement("button");

  errorContentEle.innerText = contentMessage;
  errorButtonEle.className = "error-page-button";
  errorButtonEle.innerText = buttonMessage;

  errorEle.appendChild(errorContentEle);
  errorEle.appendChild(errorButtonEle);

  info("에러가 발생하였습니다.");
};

drawError();
