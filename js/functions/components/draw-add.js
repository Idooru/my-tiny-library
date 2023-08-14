import { drawInfo } from "./draw-info.js";

export const drawAdd = () => {
  const submitButtonEle = document.querySelector("#submit-button");

  submitButtonEle.addEventListener("click", (event) => {
    event.preventDefault();
    const inputs = document.querySelectorAll("#input-box input");
    const [subject, author, publisher, date, price, summary, photo] = inputs;

    let newBook = {
      subject: subject.value,
      author: author.value,
      publisher: publisher.value,
      date: date.value,
      price: price.value,
      summary: summary.value,
      photo: photo.value,
    };

    window.location.href = "/";
  });

  drawInfo("책을 추가합니다!");
};
