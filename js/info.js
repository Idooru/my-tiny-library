export const info = (message) => {
  const infoEle = document.querySelector("#info");
  const infoContent = document.createElement("p");

  infoContent.className = "error-info";

  let text = "";

  text += " ";
  text += message;

  infoContent.innerText = text;

  infoEle.appendChild(infoContent);
};
