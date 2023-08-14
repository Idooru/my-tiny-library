export const drawInfo = (message) => {
  const infoEle = document.querySelector("#info");
  const infoContent = document.createElement("p");

  let text = "";

  text += " ";
  text += message;

  infoContent.innerText = text;

  infoEle.appendChild(infoContent);
};
