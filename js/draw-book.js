import books from "./booklist.js";

export const drawBook = () => {
  const contentItems = document.querySelector(".content-items");

  books.forEach((book) => {
    const liEle = document.createElement("li");

    liEle.innerHTML = `
        <div class="book">
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
            <button>수정</button>
            <button>삭제</button>
          </div>
        </div>
    `;

    contentItems.appendChild(liEle);

    const imgItems = document.querySelectorAll(".img-box");
    const darkmodeEle = document.querySelector(".darkmode");
    const modalEle = document.querySelector(".modal");
    const modalContentTitle = document.querySelector(".modal__content h1");
    const modalContentContent = document.querySelector(".modal__content p");

    imgItems.forEach((imgItem) => {
      imgItem.onclick = function () {
        const titleTarget =
          this.nextElementSibling.firstElementChild.textContent.substring(4);
        const bookFound = books.find((book) => book.subject === titleTarget);

        modalContentTitle.innerText = bookFound.subject;
        modalContentContent.innerText = bookFound.summary;

        darkmodeEle.style.display = "block";
        modalEle.style.display = "block";
      };
    });
  });
};
