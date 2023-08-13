import { drawInfo } from "./drawa-info.js";
import { bookList } from "./booklist.js";
import { error } from "./error.js";

export const drawSearch = () => {
  const [[, searchItem]] = new URLSearchParams(window.location.search);

  const book = bookList.find((book) => book.subject === searchItem);

  if (book) {
    const contentItems = document.querySelector(".content-items");
    const liEle = document.createElement("li");

    liEle.innerHTML = `
        <div class="book border-rounder">
          <div class="img-box">
            <img src="./images/${book.photo}" />
          </div>
          <div class="desc">
            <p class="subject">제목: ${book.subject}</p>
            <p class="author">작가: ${book.author}</p>
            <p class="publisher">출판사: ${book.publisher}</p>
            <p class="date">출판일: ${book.date}</p>
            <p class="price">가격: ${book.price}</p>
          </div>
          <div class="buttons">
            <button class="modify-button">수정</button>
            <button class="delete-button">삭제</button>
          </div>
        </div>
    `;

    contentItems.appendChild(liEle);

    const imgItems = document.querySelectorAll(".img-box");
    const darkmodeEle = document.querySelector(".darkmode");
    const modalEle = document.querySelector(".modal");
    const modalBoxEle = document.querySelector(".modal-box");
    const modalBoxTitle = document.createElement("h1");
    const modalBoxContent = document.createElement("p");
    const modalBoxGuideLine = document.createElement("p");

    imgItems.forEach((imgItem) => {
      imgItem.onclick = function () {
        const titleTarget =
          this.nextElementSibling.firstElementChild.textContent.substring(4);
        const bookFound = bookList.find((book) => book.subject === titleTarget);

        modalBoxTitle.innerText = bookFound.subject;
        modalBoxContent.innerText = bookFound.summary;
        modalBoxGuideLine.innerText = "창을 누르시면 창이 닫히게 됩니다!";

        modalBoxContent.id = "content";
        modalBoxGuideLine.id = "guide-line";
        modalBoxContent.className = "flex-sort";
        modalBoxGuideLine.className = "flex-sort";

        darkmodeEle.style.display = "block";
        modalEle.style.display = "block";

        modalBoxEle.appendChild(modalBoxTitle);
        modalBoxEle.appendChild(modalBoxContent);
        modalBoxEle.appendChild(modalBoxGuideLine);
      };
    });
    drawInfo(`${book.subject}(으)로 검색된 결과를 가져옵니다!`);
  } else {
    error("not found name");
  }
};
